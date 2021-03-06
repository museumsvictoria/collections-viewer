import { createMarkup, convertNewlines, joinStrings } from '../utilities';
import {
  convertAssociations,
  convertBrands,
  convertTaxonomy,
  convertDimensions,
  convertThumbnail,
  convertImages,
} from '../converters';

const itemTransformer = {
  id: src => src.id,
  title: src => src.displayTitle,
  images: src => convertImages(src.media.filter(m => m.type === 'image')),
  thumbnail: src => convertThumbnail(src.media.find(m => m.type === 'image')),
  content: src =>
    createMarkup([
      { term: 'Summary', value: convertNewlines(src.objectSummary) },
      { term: 'Description of Content', value: src.isdDescriptionOfContent },
      { term: 'Physical Description', value: src.physicalDescription },
      {
        term: 'Physical Description',
        value: src.indigenousCulturesDescription,
      },
      { term: 'Physical Description', value: src.archeologyDescription },
      { term: 'Local Name', value: src.indigenousCulturesLocalName },
      { term: 'Title', value: src.tradeLiteratureCoverTitle },
      { term: 'Title', value: src.indigenousCulturesTitle },
      { term: 'Obverse Description', value: src.numismaticsObverseDescription },
      { term: 'Reverse Description', value: src.numismaticsReverseDescription },
      { term: 'Edge Description', value: src.numismaticsEdgeDescription },
      { term: 'Significance', value: convertNewlines(src.significance) },
    ]),
  subContent: src =>
    createMarkup([
      { term: 'Registration number', value: src.registrationNumber },
      {
        term: 'Location',
        value: src.museumLocation
          ? joinStrings([location.gallery, location.venue])
          : 'Not on display (currently in storage)',
      },
      { term: 'Collection Names', value: joinStrings(src.collectionNames) },
      { term: 'Collecting Areas', value: joinStrings(src.collectingAreas) },
      { term: 'Acquisition Information', value: src.acquisitionInformation },
      { term: 'Acknowledgement', value: src.acknowledgement },
      { term: 'Photographer', value: src.indigenousCulturesPhotographer },
      { term: 'Author', value: src.indigenousCulturesAuthor },
      { term: 'Illustrator', value: src.indigenousCulturesIllustrator },
      { term: 'Maker', value: src.indigenousCulturesMaker },
      { term: 'Date Produced', value: src.indigenousCulturesDate },
      { term: 'Collector', value: src.indigenousCulturesCollector },
      { term: 'Date Collected', value: src.indigenousCulturesDateCollected },
      {
        term: src.tradeLiteraturePrimaryRole,
        value: src.tradeLiteraturePrimaryRole
          ? src.tradeLiteraturePrimaryName
          : null,
      },
      { term: 'Publisher', value: src.artworkPublisher },
      { term: 'Manufacture Name', value: src.archeologyManufactureName },
      { term: 'Manufacture Date', value: src.archeologyManufactureDate },
      { term: 'Date Issued', value: src.numismaticsDateIssued },
      { term: 'Date Issued', value: src.philatelyDateIssued },
      { term: 'Publication Date', value: src.tradeLiteraturePublicationDate },
      ...convertAssociations(src.associations),
      {
        term: 'Individuals Identified',
        value: src.indigenousCulturesIndividualsIdentified,
      },
      { term: 'Individuals Identified', value: src.isdPeopleDepicted },
      { term: 'Letter To', value: src.indigenousCulturesLetterTo },
      { term: 'Letter From', value: src.indigenousCulturesLetterFrom },
      { term: 'Letter From', value: src.indigenousCulturesLetterFrom },
      {
        term: 'Locality',
        value: joinStrings(src.indigenousCulturesLocalities),
      },
      { term: 'Recording Details', value: src.audioVisualRecordingDetails },
      {
        term: 'Content Summary',
        value: joinStrings(src.audioVisualContentSummaries),
      },
      { term: 'Format', value: src.isdFormat },
      { term: 'Language', value: src.isdLanguage },
      { term: 'Number of Sheets', value: src.indigenousCulturesSheets },
      { term: 'Number of Pages', value: src.indigenousCulturesPages },
      { term: 'Inscriptions', value: src.inscription },
      { term: 'Model Name or Number', value: joinStrings(src.modelNames) },
      { term: 'Brand Names', value: convertBrands(src.brands) },
      { term: 'Context Number', value: src.archeologyContextNumber },
      { term: 'Site', value: src.archeologySite },
      {
        term: 'Distinguishing Marks',
        value: src.archeologyDistinguishingMarks,
      },
      { term: 'Activity', value: src.archeologyActivity },
      { term: 'Specific Activity', value: src.archeologySpecificActivity },
      { term: 'Decoration', value: src.archeologyDecoration },
      { term: 'Pattern', value: src.archeologyPattern },
      { term: 'Colour', value: src.archeologyColour },
      { term: 'Moulding', value: src.archeologyMoulding },
      { term: 'Placement', value: src.archeologyPlacement },
      { term: 'Form', value: src.archeologyForm },
      { term: 'Shape', value: src.archeologyShape },
      { term: 'Technique', value: src.archeologyTechnique },
      { term: 'Provenance', value: src.archeologyProvenance },
      { term: 'Denomination', value: src.numismaticsDenomination },
      { term: 'Denomination', value: src.philatelyDenomination },
      { term: 'Series', value: src.numismaticsSeries },
      { term: 'Material', value: src.numismaticsMaterial },
      { term: 'Axis', value: src.numismaticsAxis },
      { term: 'Colour', value: src.philatelyColour },
      { term: 'Imprint', value: src.philatelyImprint },
      { term: 'Issue', value: src.philatelyIssue },
      { term: 'Item Form', value: src.philatelyForm },
      { term: 'Overprint', value: src.philatelyOverprint },
      { term: 'Gibbons Number', value: src.philatelyGibbonsNumber },
      { term: 'Number of Pages', value: src.tradeLiteratureNumberofPages },
      { term: 'Page Size Format', value: src.tradeLiteraturePageSizeFormat },
      { term: 'Primary Subject', value: src.tradeLiteraturePrimarySubject },
      {
        term: 'Illustration Types',
        value: src.tradeLiteratureIllustrationTypes,
      },
      { term: 'Printing Types', value: src.tradeLiteraturePrintingTypes },
      {
        term: 'Publication Types',
        value: joinStrings(src.tradeLiteraturePublicationTypes),
      },
      { term: 'Medium', value: src.artworkMedium },
      { term: 'Technique', value: src.artworkTechnique },
      { term: 'Support', value: src.artworkSupport },
      { term: 'Plate Number', value: src.artworkPlateNumber },
      { term: 'Drawing Number', value: src.artworkDrawingNumber },
      { term: 'State', value: src.artworkState },
      { term: 'Primary Inscriptions', value: src.artworkPrimaryInscriptions },
      {
        term: 'Secondary Inscriptions',
        value: src.artworkSecondaryInscriptions,
      },
      { term: 'Tertiary Inscriptions', value: src.artworkTertiaryInscriptions },
      {
        term: 'Cultural Groups',
        value: joinStrings(src.indigenousCulturesCulturalGroups),
      },
      { term: 'Object/Medium', value: src.indigenousCulturesMedium },
      { term: 'Classification', value: joinStrings(src.classifications) },
      ...convertTaxonomy(src.taxonomy),
      { term: 'Type Status', value: src.typeStatus },
      { term: 'Identified By', value: src.identifiedBy },
      { term: 'Date Identified', value: src.dateIdentified },
      { term: 'Category', value: src.category },
      { term: 'Discipline', value: src.discipline },
      { term: 'Type of item', value: src.type },
      ...convertDimensions(src.dimensions),
      { term: 'Model Scale', value: src.modelScale },
      { term: 'Shape', value: src.shape },
      {
        term: 'References',
        value: joinStrings(
          [src.references, joinStrings(src.bibliographies, '<br />')],
          '<br />',
        ),
      },
      { term: 'Keywords', value: joinStrings(src.keywords) },
    ]),
};

export default itemTransformer;
