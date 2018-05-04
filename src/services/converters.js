import { joinStrings } from './utilities';

export const convertAssociations = associations => {
  if (!associations || !associations.length) return { value: null };

  return associations.map(association => ({
    term: association.type,
    value: joinStrings([
      association.name,
      association.streetAddresss,
      association.locality,
      association.region,
      association.state,
      association.country,
      association.date,
      association.comments,
    ]),
  }));
};

export const convertBrands = brands =>
  joinStrings(
    brands.map(
      brand => (brand.name ? `${brand.name} (${brand.productType})` : null),
    ),
  );

export const convertTaxonomy = taxonomy => {
  if (!taxonomy || !taxonomy.length) return { value: null };

  return [
    { term: 'Taxon Name', value: taxonomy.taxonName },
    { term: 'Scientific Author', value: taxonomy.author },
    { term: 'Preferred Common name', value: taxonomy.commonName },
    {
      term: 'Other Common Names',
      value: joinStrings(taxonomy.otherCommonNames),
    },
    { term: 'Kingdom', value: taxonomy.kingdom },
    { term: 'Phylum', value: taxonomy.phylum },
    { term: 'Subphylum', value: taxonomy.subphylum },
    { term: 'Superclass', value: taxonomy.superclass },
    { term: 'Class', value: taxonomy.class },
    { term: 'Subclass', value: taxonomy.subclass },
    { term: 'Superorder', value: taxonomy.superorder },
    { term: 'Order', value: taxonomy.order },
    { term: 'Suborder', value: taxonomy.suborder },
    { term: 'Infraorder', value: taxonomy.infraorder },
    { term: 'Superfamily', value: taxonomy.superfamily },
    { term: 'Family', value: taxonomy.family },
    { term: 'Subfamily', value: taxonomy.subfamily },
    { term: 'Genus', value: `<em>${taxonomy.genus}</em>` },
    { term: 'Subgenus', value: `<em>${taxonomy.subgenus}</em>` },
    { term: 'Species Name', value: `<em>${taxonomy.species}</em>` },
    { term: 'Subspecies', value: `<em>${taxonomy.subspecies}</em>` },
  ];
};

export const convertDimensions = dimensions =>
  dimensions.map(dimension => ({
    term: dimension.configuration ? dimension.configuration : 'Dimensions',
    value: joinStrings([dimension.dimensions, dimension.comments], '<br />'),
  }));

export const convertStorages = storages =>
  joinStrings(
    storages.map(storage =>
      joinStrings(
        [
          storage.nature,
          storage.form,
          storage.fixativeTreatment,
          storage.medium,
        ],
        ' ',
      ),
    ),
  );

export const convertCollectionEvent = collectionEvent => {
  if (!collectionEvent || !collectionEvent.length) return { value: null };

  return [
    { term: 'Expedition Name', value: collectionEvent.expeditionName },
    { term: 'Collected By', value: collectionEvent.collectedBy },
    {
      term: 'Collection Event Code',
      value: collectionEvent.collectionEventCode,
    },
    { term: 'Sampling Method', value: collectionEvent.samplingMethod },
    {
      term: 'Date Visited From',
      value: collectionEvent.dateVisitedFrom
        ? new Date(collectionEvent.dateVisitedFrom).toLocaleDateString('en-AU')
        : null,
    },
    {
      term: 'Date Visited To',
      value: collectionEvent.dateVisitedTo
        ? new Date(collectionEvent.dateVisitedTo).toLocaleDateString('en-AU')
        : null,
    },
    { term: 'Depth To (m)', value: collectionEvent.depthTo },
    { term: 'Depth From (m)', value: collectionEvent.depthFrom },
  ];
};

export const convertThumbnail = image => ({
  uri: image.small.uri,
  alternativeText: image.alternativeText
    ? image.alternativeText
    : image.caption,
});

export const convertImages = images =>
  images.map(image => ({
    alternativeText: image.alternativeText,
    caption: image.caption,
    mediumUri: image.medium.uri,
    largeUri: image.large.uri,
  }));
