const categories = [
  'property',
  'class'
] as const;
export type Category = (typeof categories)[number];

const templates = [
  '@prefix ex: <http://ex.com/> .',
  'prefix ex: <http://ex.com/>'
] as const;
export type Templates = (typeof templates)[number];

export const documentypeSelectors = ['turtle', 'trig'] as const;

export type VocabularyItems = Record<string, {
  category: 'class' | 'property',
  label?: string
  description?: string
}> ;

export type Vocabularies = Record<string, {
  iri: string
  label?: string
  description?: string,
  _items?: VocabularyItems
  items: (prefix?: string) => VocabularyItems
}> ;

export interface Vocabulary {
  prefix: string
  iri: string
  label?: string
  description?: string
  items: VocabularyItems
}

export type PrefixesCC = Record<string, string>;

