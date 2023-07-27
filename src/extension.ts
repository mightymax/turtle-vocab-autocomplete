import * as vscode from 'vscode';
import { Vocabularies, PrefixesCC } from './types';
import findPrefixCommand from './findPrefix.command';
import findPrefixAutocomplete from './findPrefix.autocomplete';
import { readFileSync } from 'fs';
import path from 'path';
import vocabularyAutocomplete from './vocabulary.autocomplete';
import removeUnusedPrefixesCommand from './removeUnusedPrefixes.command';
import addMissingPrefixesCommand from './addMissingPrefixes.command';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "turtle-vocab-autocomplete" is now active!');
  const vocabularies: Vocabularies = JSON.parse(readFileSync(path.join(__dirname, '..', 'static', 'Vocabularies', 'vocabularies.json'), 'utf-8'));
  const prefixCC: PrefixesCC = JSON.parse(readFileSync(path.join(__dirname, '..', 'static', 'all.file.json'), 'utf-8'));

	// lazy loading vocabularies:
	for (const prefix in vocabularies) {
		vocabularies[prefix].items = (_prefix?: string) => {
			if (vocabularies[prefix]._items === undefined) {
				vocabularies[prefix]._items = JSON.parse(readFileSync(path.join(__dirname, '..', 'static', 'Vocabularies', `${_prefix ?? prefix}.json`), 'utf-8')).items;
			}
			return vocabularies[prefix]._items ?? {};
		};
	}
	vocabularies.sdo = { ... vocabularies.schema };
	vocabularies.sdo.iri = 'https://schema.org';
	vocabularies.sdo.items = () => vocabularies.schema.items('schema');

	for (const prefix in prefixCC) {
		if (typeof vocabularies[prefix] === 'undefined') {
			vocabularies[prefix] = { iri: prefixCC[prefix], items: () => { return {}; } };
		}
	}

	context.subscriptions.push(
		findPrefixCommand(vocabularies),
		addMissingPrefixesCommand(prefixCC),
		removeUnusedPrefixesCommand(prefixCC),
		findPrefixAutocomplete(vocabularies),
		vocabularyAutocomplete(vocabularies)
	);
}

export function deactivate() {}

