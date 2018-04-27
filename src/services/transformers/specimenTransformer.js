import { createMarkup, convertNewlines, joinStrings } from '../utilities';
import {
  convertTaxonomy,
  convertStorages,
  convertAssociations,
  convertCollectionEvent,
} from './miscTransformers';

const specimenTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => src.media.filter(m => m.type === 'image'),
  summary: src =>
    createMarkup([
      { term: 'Summary', value: convertNewlines(src.objectSummary) },
      { term: 'Description of Content', value: src.isdDescriptionOfContent },
      { term: 'Acquisition Information', value: src.acquisitionInformation },
      { term: 'Acknowledgement', value: src.acknowledgement },
      { term: 'Classification', value: joinStrings(src.classifications) },
      { term: 'Significance', value: convertNewlines(src.significance) },
    ]),
  detail: src =>
    createMarkup([
      { term: 'Registration number', value: src.registrationNumber },
      {
        term: 'Location',
        value: src.museumLocation
          ? joinStrings([location.gallery, location.venue])
          : 'Not on display (currently in storage)',
      },
      { term: 'Collection Names', value: joinStrings(src.collectionNames) },
      ...convertTaxonomy(src.taxonomy),
      { term: 'Type Status', value: src.typeStatus },
      { term: 'Identified By', value: src.identifiedBy },
      { term: 'Date Identified', value: src.dateIdentified },
      {
        term: 'Number Of Specimens',
        value:
          src.numberOfSpecimens && src.clutchSize
            ? src.numberOfSpecimens
            : null,
      },
      {
        term: 'Clutch Size',
        value: src.numberOfSpecimens && src.clutchSize ? src.clutchSize : null,
      },
      { term: 'Sex', value: src.sex },
      { term: 'Stage Or Age', value: src.stageOrAge },
      { term: 'Specimen Nature', value: convertStorages(src.storages) },
      { term: 'Rock Name', value: src.petrologyRockName },
      { term: 'Rock Class', value: src.petrologyRockClass },
      { term: 'Rock Group', value: src.petrologyRockGroup },
      { term: 'Rock Description', value: src.petrologyRockDescription },
      { term: 'Minerals Present', value: src.petrologyMineralsPresent },
      { term: 'Species', value: src.mineralogySpecies },
      { term: 'Variety', value: src.mineralogyVariety },
      { term: 'Group', value: src.mineralogyGroup },
      { term: 'Class', value: src.mineralogyClass },
      { term: 'Type of mineral type', value: src.mineralogyTypeOfType },
      { term: 'Associated Matrix', value: src.mineralogyAssociatedMatrix },
      { term: 'Name', value: src.meteoritesName },
      { term: 'Class', value: src.meteoritesClass },
      { term: 'Group', value: src.meteoritesGroup },
      { term: 'Type', value: src.meteoritesType },
      { term: 'Minerals present', value: src.meteoritesMinerals },
      { term: 'Specimen Weight', value: src.meteoritesSpecimenWeight },
      { term: 'Total Weight', value: src.meteoritesTotalWeight },
      { term: 'Date specimen fell', value: src.meteoritesDateFell },
      { term: 'Date specimen found', value: src.meteoritesDateFound },
      { term: 'Name', value: src.tektitesName },
      { term: 'Classification', value: src.tektitesClassification },
      { term: 'Shape', value: src.tektitesShape },
      { term: 'Local Strewnfield', value: src.tektitesLocalStrewnfield },
      { term: 'Global Strewnfield', value: src.tektitesGlobalStrewnfield },
      { term: 'Global Strewnfield', value: src.tektitesGlobalStrewnfield },
      ...convertAssociations(src.associations),
      ...convertCollectionEvent(src.collectionEvent),
      { term: 'Category', value: src.category },
      { term: 'Scientific Group', value: src.scientificGroup },
      { term: 'Discipline', value: src.discipline },
      { term: 'Collecting Areas', value: joinStrings(src.collectingAreas) },
      { term: 'Type of Item', value: src.type },
      { term: 'Keywords', value: joinStrings(src.keywords) },
    ]),
};

export default specimenTransformer;
