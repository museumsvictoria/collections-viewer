const speciesTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => src.media.filter(m => m.type === 'image'),
};

export default speciesTransformer;
