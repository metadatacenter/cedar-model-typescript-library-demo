import { TextField, CedarWriters, JSONTemplateFieldWriter, CedarJSONWriters } from 'cedar-model-typescript-library';

const field: TextField = TextField.buildEmptyWithDefaultValues();

const writers: CedarJSONWriters = CedarWriters.json().getStrict();
const jsonWriter: JSONTemplateFieldWriter = writers.getJSONFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field as JSON string, length  : ' + fieldSerialized.length);
console.log(fieldSerialized);
