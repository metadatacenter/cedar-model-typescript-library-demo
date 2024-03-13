import { CedarTextField, CedarWriters, JSONFieldWriter } from 'cedar-model-typescript-library';

const field: CedarTextField = CedarTextField.buildEmptyWithDefaultValues();

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONFieldWriter = writers.getJSONFieldWriterForField(field);

const templateSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized template as JSON string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
