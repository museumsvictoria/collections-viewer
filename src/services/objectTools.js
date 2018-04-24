import transform from 'js-object-transform';
import articleTransformer from './transformers/articleTransformer';
import itemTransformer from './transformers/itemTransformer';
import speciesTransformer from './transformers/speciesTransformer';
import specimenTransformer from './transformers/specimenTransformer';

export const validateObject = object => {
  if (!object) return false;
  if (!object.media.length) return false;
  if (!object.media.find(m => m.type === 'image')) return false;

  return true;
};

const transformers = {
  article: articleTransformer,
  item: itemTransformer,
  species: speciesTransformer,
  specimen: specimenTransformer,
};

export const transformObject = object =>
  transform(object, transformers[object.recordType]);
