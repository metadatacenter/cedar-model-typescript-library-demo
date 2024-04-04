import * as path from 'path';
import * as fs from 'fs';
import {
  CedarReaders,
  CedarWriters,
  JSONTemplateReader,
  JSONTemplateReaderResult,
  JsonNode,
  Template,
  YAMLTemplateWriter,
} from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const templateReader: JSONTemplateReader = CedarReaders.json().getStrict().getTemplateReader();

const readerResult: JSONTemplateReaderResult = templateReader.readFromString(templateSource);

const template: Template = readerResult.template;

const yamlWriter: YAMLTemplateWriter = CedarWriters.yaml().getStrict().getYAMLTemplateWriter();
const yamlString: string = yamlWriter.getAsYamlString(template);
const yamlAsJSON: JsonNode = yamlWriter.getYamlAsJsonNode(template);

console.log(yamlString);
console.log(JSON.stringify(yamlAsJSON, null, 2));
