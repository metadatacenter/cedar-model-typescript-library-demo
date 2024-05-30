import {
  CedarBuilders,
  CedarJsonWriters,
  CedarWriters,
  IsoDate,
  JsonNode,
  JsonTemplateFieldWriter,
  SchemaVersion,
  StaticPageBreakField,
  StaticPageBreakFieldBuilder,
} from 'cedar-model-typescript-library';

const builder: StaticPageBreakFieldBuilder = CedarBuilders.pageBreakFieldBuilder();
const now = IsoDate.now();
const field: StaticPageBreakField = builder
  .withAtId('https://repo.metadatacenter.org/template-fields/f38b5ef4-a078-4d82-90c0-a9a721ad5ecf')
  .withTitle('Text field title')
  .withDescription('Text field description')
  .withSchemaVersion(SchemaVersion.CURRENT)
  .withCreatedOn('2024-03-12T10:03:57-07:00')
  .withCreatedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c95')
  .withLastUpdatedOn(now)
  .withModifiedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c99')
  .withVersion('0.0.2')
  .withStatus('bibo:published')
  .withSchemaName('Schema nam of this template')
  .withSchemaDescription('Schema description of the template')
  .withPreferredLabel('Preferred label')
  .withAlternateLabels(['Alt label 1', 'Alt label 2', 'Alt label 3'])
  .build();

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateFieldWriter = writers.getFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field as Json string, length               : ' + fieldSerialized.length);
// console.log(fieldSerialized);

const fieldNode: JsonNode = jsonWriter.getAsJsonNode(field);
const fieldNodeSerialized = JSON.stringify(fieldNode, null, 2);
console.log('Serialized field as Json object, then string, length  : ' + fieldNodeSerialized.length);
console.log(fieldNode);
