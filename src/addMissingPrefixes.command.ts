import * as vscode from 'vscode';
import { PrefixesCC } from './types';
export default (prefixes: PrefixesCC) =>
  vscode.commands.registerCommand('turtle-vocab-autocomplete.addMissingPrefixes',
  () => {
    if (!vscode.workspace  || !vscode.window.activeTextEditor) { return; }
    let document = vscode.window.activeTextEditor.document.getText();
    const usesPrefix: string[] = [];
    for (const prefix in prefixes) {
      
      if ([...document.matchAll(new RegExp(`( |^)${prefix}\:[a-zA-Z0-9_]+`, 'g'))].length > 0) {
        usesPrefix.push(prefix);
      }
    }
    // console.log(usesPrefix)
    const hasPrefixes: string[] = [];
    for (const line of document.split('\n')) {
      for (const prefix of usesPrefix) {
        if (line.startsWith(`@prefix ${prefix}:`) || line.startsWith(`prefix ${prefix}:`)) {
          hasPrefixes.push(prefix);
        }
      }
    }

    const needsPrefixes = usesPrefix.filter(prefix => !hasPrefixes.includes(prefix));
    if (needsPrefixes.length === 0) {return;};
    let snippet = '';
    const template = vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.template') ?? 'prefix ex: <http://ex.com/>';
    const languageId = vscode.window.activeTextEditor!.document.languageId;
    let prefixSnippet = '';
    for (const prefix of needsPrefixes) {
      prefixSnippet += template === '@prefix ex: <http://ex.com/> .' ?
        `@prefix ${prefix}: <${prefixes[prefix]}> .\n` :
        `prefix ${prefix}: <${prefixes[prefix]}>\n` ;
      if (languageId === 'sparql') {
       prefixSnippet += `prefix  ${prefix}: <${prefixes[prefix]}>\n` ;
      }
    }
    vscode.window.activeTextEditor!.edit(editBuilder => {
      editBuilder.insert(new vscode.Position(0, 0), prefixSnippet);
    });
  }
);