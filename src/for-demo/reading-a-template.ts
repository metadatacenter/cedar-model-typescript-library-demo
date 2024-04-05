import * as path from 'path';
import * as fs from 'fs';
import { CedarReaders, JsonTemplateReader, JsonTemplateReaderResult, Template } from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const templateReader: JsonTemplateReader = CedarReaders.json().getStrict().getTemplateReader();

const readerResult: JsonTemplateReaderResult = templateReader.readFromString(templateSource);

console.log('Parsing error count:', readerResult.parsingResult.getBlueprintComparisonErrorCount());

const template: Template = readerResult.template;

console.log('Template name:', template.schema_name);
console.log('Template children names:', template.getChildrenInfo().getChildrenNames());
