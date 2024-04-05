import * as path from 'path';
import * as fs from 'fs';
import { CedarJsonWriters, JsonTemplateReader, RoundTrip } from 'cedar-model-typescript-library';
import { CedarWriters } from 'cedar-model-typescript-library';
import { JsonTemplateWriter } from 'cedar-model-typescript-library';

const filePath = path.join(__dirname, './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const reader: JsonTemplateReader = JsonTemplateReader.getStrict();
const jsonTemplateReaderResult = reader.readFromString(templateSource);
console.log('Parsing error count                           : ' + jsonTemplateReaderResult.parsingResult.getBlueprintComparisonErrorCount());
const template = jsonTemplateReaderResult.template;

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateWriter = writers.getTemplateWriter();

const templateReSerialized = jsonWriter.getAsJsonString(template);
console.log('Original template as Json string, length      : ' + templateSource.length);
console.log('ReSerialized template as Json string, length  : ' + templateReSerialized.length);

const compareResult = RoundTrip.compare(jsonTemplateReaderResult, jsonWriter);
console.log('RoundTrip comparison difference count (exp. 3): ', compareResult.getBlueprintComparisonErrorCount());

console.log('RoundTrip comparison differences: ');
console.log(JSON.stringify(compareResult.getBlueprintComparisonErrors(), null, 2));
