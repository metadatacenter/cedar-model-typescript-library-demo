import { CedarBuilders, CedarJsonWriters, CedarWriters, JsonTemplateFieldWriter, TextField } from 'cedar-model-typescript-library';

const field: TextField = CedarBuilders.textFieldBuilder().build();

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateFieldWriter = writers.getFieldWriterForField(field);

const fieldSerialized = jsonWriter.getAsJsonString(field);
console.log('Serialized field as Json string, length  : ' + fieldSerialized.length);
console.log(fieldSerialized);
