import { createMarkup, joinStrings } from '../utilities';
import { convertTaxonomy } from './miscTransformers';

const speciesTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => src.media.filter(m => m.type === 'image'),
  summary: src =>
    createMarkup([
      { term: 'General Description', value: src.generalDescription },
      { term: 'Biology', value: src.biology },
      { term: 'Distribution', value: src.distribution },
      { term: 'Habitat', value: src.habitat },
    ]),
  detail: src =>
    createMarkup([
      { term: 'Animal Type', value: src.animalType },
      { term: 'Animal SubType', value: src.animalSubType },
      { term: 'Fast Fact', value: src.fastFact },
      { term: 'Brief Id', value: src.briefId },
      { term: 'Colours', value: joinStrings(src.colours) },
      { term: 'Maximum Size', value: src.maximumSize },
      { term: 'Habitats', value: joinStrings(src.habitats) },
      { term: 'Where To Look', value: joinStrings(src.whereToLook) },
      { term: 'When Active', value: joinStrings(src.whenActive) },
      { term: 'National Parks', value: joinStrings(src.nationalParks) },
      { term: 'Diet', value: src.diet },
      { term: 'Diet Categories', value: joinStrings(src.dietCategories) },
      { term: 'Hazards', value: src.hazards },
      { term: 'Endemicity', value: src.endemicity },
      { term: 'Commercial', value: src.commercial },
      {
        term: 'Conservation Statuses',
        value: joinStrings(src.conservationStatuses),
      },
      { term: 'Web', value: src.web },
      { term: 'Plants', value: joinStrings(src.plants) },
      { term: 'Flight Start', value: src.flightStart },
      { term: 'Flight End', value: src.flightEnd },
      { term: 'Depths', value: joinStrings(src.depths) },
      {
        term: 'Water Column Locations',
        value: joinStrings(src.waterColumnLocations),
      },
      ...convertTaxonomy(src.taxonomy),
      { term: 'Authors', value: joinStrings(src.authors.map(a => a.fullName)) },
    ]),
};

export default speciesTransformer;
