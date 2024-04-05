import * as path from 'path';
import * as fs from 'fs';
import {
  CedarReaders,
  CedarWriters,
  JsonTemplateReader,
  JsonTemplateReaderResult,
  JsonNode,
  Template,
  YamlTemplateWriter,
} from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const templateSource = fs.readFileSync(filePath, 'utf8');

const templateReader: JsonTemplateReader = CedarReaders.json().getStrict().getTemplateReader();

const readerResult: JsonTemplateReaderResult = templateReader.readFromString(templateSource);

const template: Template = readerResult.template;

const yamlWriter: YamlTemplateWriter = CedarWriters.yaml().getStrict().getTemplateWriter();
const yamlString: string = yamlWriter.getAsYamlString(template);
const yamlAsJson: JsonNode = yamlWriter.getYamlAsJsonNode(template);

console.log(yamlString);
console.log(JSON.stringify(yamlAsJson, null, 2));
