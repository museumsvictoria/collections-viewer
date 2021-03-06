import { createMarkup, joinStrings } from '../utilities';
import { convertThumbnail, convertImages } from '../converters';

const articleTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => convertImages(src.media.filter(m => m.type === 'image')),
  thumbnail: src => convertThumbnail(src.media.find(m => m.type === 'image')),
  content: src =>
    createMarkup([
      { term: 'Summary', value: src.contentSummary },
      { value: src.content, noWrap: true },
    ]),
  subContent: src =>
    createMarkup([
      { term: 'Keywords', value: joinStrings(src.keywords) },
      { term: 'Localities', value: joinStrings(src.localities) },
      { term: 'Authors', value: joinStrings(src.authors.map(a => a.fullName)) },
      {
        term: 'Contributors',
        value: joinStrings(src.contributors.map(c => c.fullName)),
      },
      { term: 'Article types', value: joinStrings(src.types) },
    ]),
};

export default articleTransformer;
