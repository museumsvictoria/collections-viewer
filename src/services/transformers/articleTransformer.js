import { createMarkup } from '../utilities';

const articleTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => src.media.filter(m => m.type === 'image'),
  content: src =>
    createMarkup([
      { term: 'Summary', value: src.contentSummary },
      { value: src.content, noWrap: true },
    ]),
};

export default articleTransformer;
