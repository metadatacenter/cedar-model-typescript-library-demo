import * as path from 'path';
import * as fs from 'fs';
import { CedarReaders, JSONTemplateReader, JSONTemplateReaderResult, Template } from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const templateReader: JSONTemplateReader = CedarReaders.json().getStrict().getTemplateReader();

const readerResult: JSONTemplateReaderResult = templateReader.readFromString(templateSource);

console.log('Parsing error count:', readerResult.parsingResult.getBlueprintComparisonErrorCount());

const template: Template = readerResult.template;

console.log('Template name:', template.schema_name);
console.log('Template children names:', template.getChildrenInfo().getChildrenNames());
