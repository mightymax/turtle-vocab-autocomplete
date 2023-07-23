import * as vscode from 'vscode';
import { Vocabularies, documentypeSelectors } from './types';
export default (
  vocabularies: Vocabularies
) => {
  return vscode.languages.registerCompletionItemProvider(
			[...documentypeSelectors, 'sparql'],
			{
				provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
					const linePrefix = document.lineAt(position).text.slice(0, position.character);
          const reversed = linePrefix.split("").reverse().join("");
          // if (reversed.startsWith(':')) return;
          let prefix;
          if (reversed.match(/^\:([a-z0-9]+)(?: .*)?$/)) {
            prefix = reversed.replace(/^\:([a-z0-9]+)(?: .*)$/, '$1').split("").reverse().join("");
          }
          console.log(prefix)
          if (prefix === undefined || vocabularies[prefix.replace(/:$/, '')] === undefined) {
            return;
          };
          prefix = prefix.replace(/:$/, '');

          const items = vocabularies[prefix].items();
          if (Object.keys(items).length === 0) {
            console.log(`no items for ${prefix}:`)
            return ;
          }

          const completeOptions: vscode.CompletionItem[] = [];
          for (const id in items) {
            let itemKind = vscode.CompletionItemKind.Text;
            switch (items[id].category) {
              case 'class':
                itemKind = vscode.CompletionItemKind.Class;
                break;
              case 'property':
                itemKind = vscode.CompletionItemKind.Property;
                break;
            }
            const item = new vscode.CompletionItem(id, itemKind);
            let markdown = `**${items[id].label ?? id}**`;
            if (items[id].description) {markdown += `\n\n${items[id].description}`;}
            item.documentation = new vscode.MarkdownString(markdown);
            completeOptions.push(item);
          }
          return completeOptions;
				}
			},
			':'
		);
};
