import * as path from 'path';
import * as fs from 'fs';
import { JSONTemplateReader } from 'cedar-model-typescript-library';
import { CedarWriters } from 'cedar-model-typescript-library';
import { JSONTemplateWriter } from 'cedar-model-typescript-library';

const filePath = path.join(__dirname, './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const reader: JSONTemplateReader = JSONTemplateReader.getStrict();
const jsonTemplateReaderResult = reader.readFromString(templateSource);
console.log('Parsing error count                           : ' + jsonTemplateReaderResult.parsingResult.getBlueprintComparisonErrorCount());
const template = jsonTemplateReaderResult.template;

const writers: CedarWriters = CedarWriters.getStrict();
const jsonWriter: JSONTemplateWriter = writers.getJSONTemplateWriter();

const templateReserialized = jsonWriter.getAsJsonString(template);
console.log('Original template as JSON string, length      : ' + templateSource.length);
console.log('Reserialized template as JSON string, length  : ' + templateReserialized.length);

const compareResult = JSONTemplateReader.getRoundTripComparisonResult(jsonTemplateReaderResult, jsonWriter);
console.log('Roundtrip comparison difference count (exp. 3): ', compareResult.getBlueprintComparisonErrorCount());

console.log('Roundtrip comparison differences: ');
console.log(JSON.stringify(compareResult.getBlueprintComparisonErrors(), null, 2));
