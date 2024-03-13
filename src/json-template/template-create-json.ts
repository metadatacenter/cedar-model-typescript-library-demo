import { CedarTemplate, CedarWriters, JSONTemplateWriter } from 'cedar-model-typescript-library';

const template: CedarTemplate = CedarTemplate.buildEmptyWithDefaultValues();

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONTemplateWriter = writers.getJSONTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as JSON string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
