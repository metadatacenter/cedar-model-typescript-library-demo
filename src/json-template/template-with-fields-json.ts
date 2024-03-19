import {
  CedarBuilders,
  CedarWriters,
  ISODate,
  JSONTemplateWriter,
  SchemaVersion,
  Template,
  TemplateBuilder,
  TextField,
  TextFieldBuilder,
} from 'cedar-model-typescript-library';

const now = ISODate.now();

const textFieldBuilder: TextFieldBuilder = CedarBuilders.textFieldBuilder();
const textField: TextField = textFieldBuilder
  .withAtId('https://repo.metadatacenter.org/template-fields/f38b5ef4-a078-4d82-90c0-a9a721ad5ecf')
  .withTitle('Text field title')
  .withDescription('Text field description')
  .withSchemaVersion(SchemaVersion.CURRENT)
  .withCreatedOn('2024-03-12T10:03:57-07:00')
  .withCreatedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c95')
  .withLastUpdatedOn(now)
  .withModifiedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c99')
  .withVersion('0.0.2')
  .withBiboStatus('bibo:published')
  .withSchemaName('Schema nam of this template')
  .withSchemaDescription('Schema description of the template')
  .withPreferredLabel('Preferred label')
  .withAlternateLabels(['Alt label 1', 'Alt label 2', 'Alt label 3'])
  .withDefaultValue('default')
  .withMinLength(10)
  .withMaxLength(100)
  .withRegex('regex')
  .withValueRecommendationEnabled(true)
  .build();

const textFieldDeploymentBuilder = CedarBuilders.childDeploymentBuilder(textField, '_text_field')
  .withIri('https://schema.metadatacenter.org/properties/fac2de3a-937e-4573-810a-c1653e658cde')
  .withLabel('Text field property label')
  .withDescription('Text field property description')
  .withMultiInstance(true)
  .withMinItems(0)
  .withMaxItems(123)
  .withRequiredValue(true)
  .withHidden(true);
const textFieldDeployment = textFieldDeploymentBuilder.build();

const templateBuilder: TemplateBuilder = CedarBuilders.templateBuilder();
const template: Template = templateBuilder
  .withCreatedOn('2024-03-12T10:03:57-07:00')
  .withCreatedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c95')
  .withLastUpdatedOn(now)
  .withModifiedBy('https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c99')
  .addChild(textField, textFieldDeployment)
  .build();

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONTemplateWriter = writers.getJSONTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as JSON string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
