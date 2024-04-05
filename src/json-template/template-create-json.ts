import { Template, CedarWriters, JsonTemplateWriter, CedarJsonWriters } from 'cedar-model-typescript-library';

const template: Template = Template.buildEmptyWithDefaultValues();

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateWriter = writers.getTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as Json string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
