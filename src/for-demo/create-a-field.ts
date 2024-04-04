import {
  BiboStatus,
  CedarBuilders,
  CedarJSONWriters,
  CedarUser,
  CedarWriters,
  ISODate,
  JSONTemplateFieldWriter,
  SchemaVersion,
  TextField,
  TextFieldBuilder,
} from 'cedar-model-typescript-library';

const builder: TextFieldBuilder = CedarBuilders.textFieldBuilder();
const now: ISODate = ISODate.now();
const userId: string = 'https://metadatacenter.org/users/c7dcc3ca-55fe-4ca8-b448-ab110bfe4c95';
const user: CedarUser = CedarUser.forValue(userId);
const field: TextField = builder
  .withTitle('Text field title')
  .withDescription('Text field description')
  .withSchemaVersion(SchemaVersion.CURRENT)
  .withCreatedOn(now)
  .withCreatedBy(user)
  .withLastUpdatedOn(now.getValue())
  .withModifiedBy(userId)
  .withVersion('0.0.2')
  .withBiboStatus(BiboStatus.DRAFT)
  .withDefaultValue('default value')
  .build();

const writers: CedarJSONWriters = CedarWriters.json().getStrict();
const jsonWriter: JSONTemplateFieldWriter = writers.getJSONFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field:', fieldSerialized);
