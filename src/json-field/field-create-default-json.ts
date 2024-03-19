import { TextField, CedarWriters, JSONTemplateFieldWriter } from 'cedar-model-typescript-library';

const field: TextField = TextField.buildEmptyWithDefaultValues();

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONTemplateFieldWriter = writers.getJSONFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field as JSON string, length  : ' + fieldSerialized.length);
console.log(fieldSerialized);
