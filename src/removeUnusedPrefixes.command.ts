import * as vscode from 'vscode';
import { PrefixesCC } from './types';
export default (prefixes: PrefixesCC) =>
  vscode.commands.registerCommand('turtle-vocab-autocomplete.removeUnusedPrefixes',
  () => {
    if (!vscode.workspace  || !vscode.window.activeTextEditor) { return; }
    let document = vscode.window.activeTextEditor.document.getText();
    const hasPrefixes: Array<{prefix: string, line: number}> = [];
    let line = 0;
    for (const lineTxt of document.split('\n')) {
      for (const prefix in prefixes) {
        if (lineTxt.startsWith(`@prefix ${prefix}:`) || lineTxt.startsWith(`prefix ${prefix}:`)) {
          hasPrefixes.push({ line, prefix});
        }
      }
      line++;
    }
    const usesPrefix: string[] = [];
    for (const prefix of hasPrefixes) {
      if ([...document.matchAll(new RegExp(`( |^)${prefix.prefix}\:[a-zA-Z0-9_]+`, 'g'))].length > 0) {
        usesPrefix.push(prefix.prefix);
      }
    }

    const unusedPrefixesOnLine = hasPrefixes.filter(prefix => !usesPrefix.includes(prefix.prefix))
      .map(prefix => prefix.line)
    if (unusedPrefixesOnLine.length === 0) {return;};
    vscode.window.activeTextEditor!.edit(editBuilder => {
      for (const line of unusedPrefixesOnLine) {
        editBuilder.delete(new vscode.Range(
          new vscode.Position(line, 0),
          new vscode.Position(line + 1, 0),
        ));
      }
    });
  }
);