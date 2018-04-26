import { joinStrings } from '../utilities';

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