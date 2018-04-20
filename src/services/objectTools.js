var transform = require('js-object-transform');

export const validateObject = object => {
  if (!object) return false;
  if (!object.media.length) return false;
  if (!object.media.find(m => m.type === 'image')) return false;

  return true;
};

export const transformObject = object => {
  switch (object.recordType) {
    case 'article':
      return transform(object, articleTransformer);
    case 'item':
      return transform(object, itemTransformer);
    default:
      throw 'cannot determine type of object';
  }
};

const articleTransformer = {
  id: src => src.id,
  title: src => src.title,
  images: src => src.media.filter(m => m.type === 'image'),
};

const itemTransformer = {
  id: src => src.id,
  title: src => src.objectName,
  images: src => src.media.filter(m => m.type === 'image'),
};
