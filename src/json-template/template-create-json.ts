import { Template, CedarWriters, JSONTemplateWriter, CedarJSONWriters } from 'cedar-model-typescript-library';

const template: Template = Template.buildEmptyWithDefaultValues();

const writers: CedarJSONWriters = CedarWriters.json().getStrict();
const jsonWriter: JSONTemplateWriter = writers.getJSONTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as JSON string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
