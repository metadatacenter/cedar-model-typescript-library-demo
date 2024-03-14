import { Template, CedarWriters, JSONTemplateWriter } from 'cedar-model-typescript-library';

const template: Template = Template.buildEmptyWithDefaultValues();

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONTemplateWriter = writers.getJSONTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as JSON string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
