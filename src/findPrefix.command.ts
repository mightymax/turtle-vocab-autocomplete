import * as vscode from 'vscode';
import { Templates, Vocabularies } from './types';

export function getSnippet(item: vscode.QuickPickItem, template?: Templates): string {
	template = template ?? vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.template') ?? 'prefix ex: <http://ex.com/>';
  const languageId = vscode.window.activeTextEditor!.document.languageId;

	let snippet = template === '@prefix ex: <http://ex.com/> .' ?
		`@prefix ${item.label} .` :
		`prefix ${item.label}` ;
  if (languageId === 'sparql') {
    snippet = `prefix ${item.label}` ;
  }
  if (vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.addDisplayName') ?? true) {
    if (item.description !== undefined) snippet += ` # ${item.description}`;
  }
  if (vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.addDescription') ?? false) {
    if (item.detail !== undefined) snippet = `# ${item.detail}\n${snippet}`;
  }
  return snippet;
}

const buildQuickPick = (vocabularies: Vocabularies) => {
  const picker = vscode.window.createQuickPick();
  picker.matchOnDescription = true;
  picker.matchOnDetail = true;
  picker.canSelectMany = vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.allowMultiple') ?? true;
  picker.onDidHide(() => picker.dispose());
  picker.onDidAccept(() => {
    picker.dispose();
    vscode.window.activeTextEditor!.edit(editBuilder => {
      editBuilder.replace(
        vscode.window.activeTextEditor!.selection, 
        picker.selectedItems.map(item => getSnippet(item)).join('\n')
      );
    });
  });
  
  const items = [];
  for (const prefix in vocabularies) {
    items.push({ label: `${prefix}: <${vocabularies[prefix].iri}>`, detail: vocabularies[prefix].description, description: vocabularies[prefix].label});
  };
  picker.items = items;
  return picker;

};

export default (prefixes: Vocabularies) =>
  vscode.commands.registerCommand('turtle-vocab-autocomplete.findPrefix',
  () => {
    if (!vscode.workspace  || !vscode.window.activeTextEditor) { return; }
    buildQuickPick(prefixes).show();
  }
);



