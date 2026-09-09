import * as path from 'path';
import * as fs from 'fs';
import {
  CedarJsonWriters,
  CedarWriters,
  ChildDeploymentInfo,
  JsonTemplateFieldReader,
  JsonTemplateWriter,
  Template,
} from 'cedar-model-typescript-library';
import { AbstractChildDeploymentInfo } from 'cedar-model-typescript-library/org/metadatacenter/model/cedar/deployment/AbstractChildDeploymentInfo';

const filePath = path.join(__dirname, './field.json');
const fieldSource = fs.readFileSync(filePath, 'utf8');

const reader: JsonTemplateFieldReader = JsonTemplateFieldReader.getStrict();
const jsonTemplateFieldReaderResult = reader.readFromString(fieldSource);
console.log('Parsing error count: ' + jsonTemplateFieldReaderResult.parsingResult.getBlueprintComparisonErrorCount());
const field = jsonTemplateFieldReaderResult.field;

const template: Template = Template.buildEmptyWithDefaultValues();

const deploymentInfo: AbstractChildDeploymentInfo = new ChildDeploymentInfo('field');
template.addChild(field, deploymentInfo);

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonTemplateWriter = writers.getTemplateWriter();

const templateSerialized = jsonWriter.getAsJsonString(template);
console.log('Serialized template as Json string, length  : ' + templateSerialized.length);
console.log(templateSerialized);
