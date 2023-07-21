import { readFileSync } from 'fs';
import { Vocabularies } from './types';
import path from 'path';

const index: Vocabularies = JSON.parse(readFileSync(path.join(__dirname, '..', 'static', 'Vocabularies', 'vocabularies.json'), 'utf-8'));

for (const prefix in index) {
  process.stdout.write(`- [${prefix}](${index[prefix].iri}) ${index[prefix].label ?? ''}\n`);
}
