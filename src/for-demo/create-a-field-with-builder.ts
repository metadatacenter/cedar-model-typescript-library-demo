import {
  BiboStatus,
  CedarBuilders,
  CedarJsonWriters,
  CedarUser,
  CedarWriters,
  IsoDate,
  JsonTemplateFieldWriter,
  SchemaVersion,
  TextField,
  TextFieldBuilder,
} from 'cedar-model-typescript-library';

const builder: TextFieldBuilder = CedarBuilders.textFieldBuilder();
const now: IsoDate = IsoDate.now();
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
  .withStatus(BiboStatus.DRAFT)
  .withDefaultValue('default value')
  .build();

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateFieldWriter = writers.getFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field:', fieldSerialized);
