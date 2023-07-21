import * as vscode from 'vscode';
import { Vocabularies, documentypeSelectors } from './types';
export default (vocabularies: Vocabularies) => vscode.languages.registerCompletionItemProvider(
  documentypeSelectors,
  {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
      const linePrefix = document.lineAt(position).text.slice(0, position.character);
      if (!linePrefix.endsWith(`@`)) {
        return;
      }
      const items = [];
      for (const prefix in vocabularies) {
        const item = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Text);
        let documentation = `**${prefix}** <[${vocabularies[prefix].iri}](${vocabularies[prefix].iri})>`;
        if (vocabularies[prefix].label) {
          documentation += `\n### ${vocabularies[prefix].label}`;
        }
        if (vocabularies[prefix].description) {
          documentation += `\n${vocabularies[prefix].description}`;
        }
        item.documentation = new vscode.MarkdownString(documentation);
        item.insertText = `prefix ${prefix}: <${vocabularies[prefix].iri}> .`;
        if ((vocabularies[prefix].label !== undefined) && (vscode.workspace.getConfiguration().get('conf.settingsEditor.turtleVocabAutoComplete.addDisplayName') ?? true)) {
          item.insertText += ` # ${vocabularies[prefix].label}`;
        }
        item.insertText += '\n';
        items.push(item);
      };
      return items;
    }
  },
  '@'
);
