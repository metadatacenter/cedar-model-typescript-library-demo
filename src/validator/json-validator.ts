import * as path from 'path';
import * as fs from 'fs';
import {
  AbstractArtifact,
  CedarArtifactType,
  CedarJsonReaders,
  CedarJsonWriters,
  CedarReaders,
  CedarWriters,
  JsonAbstractArtifactReader,
  JsonAbstractArtifactWriter,
  RoundTrip,
} from 'cedar-model-typescript-library';

if (process.argv.length < 3) {
  console.error('Usage: node dist/validator/json-validator.js <path_to_input.json>');
  console.error('Usage: npx ts-node src/validator/json-validator.ts <path_to_input.json>');
  process.exit(1);
}

const filePath = path.join(process.cwd(), process.argv[2]);
console.log('Loading file:       ' + filePath);
const artifactSource = fs.readFileSync(filePath, 'utf8');

const readers: CedarJsonReaders = CedarReaders.json().getStrict();
const cedarArtifactType: CedarArtifactType = CedarReaders.json().detectArtifactType(artifactSource);
const artifactReader: JsonAbstractArtifactReader = readers.getReaderForArtifactType(cedarArtifactType);

const jsonArtifactReaderResult = artifactReader.readFromString(artifactSource);
console.log('Parsing error count                           : ' + jsonArtifactReaderResult.parsingResult.getBlueprintComparisonErrorCount());
console.log(
  'Parsing warning count                         : ' + jsonArtifactReaderResult.parsingResult.getBlueprintComparisonWarningCount(),
);
const artifact: AbstractArtifact = jsonArtifactReaderResult.artifact;

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonAbstractArtifactWriter = writers.getWriterForArtifact(artifact);

const artifactReSerialized = jsonWriter.getAsJsonString(artifact);
console.log('Original template as Json string, length      : ' + artifactSource.length);
console.log('ReSerialized template as Json string, length  : ' + artifactReSerialized.length);

const compareResult = RoundTrip.compare(artifactSource, artifactReSerialized);
console.log('RoundTrip comparison difference error count   : ', compareResult.getBlueprintComparisonErrorCount());
console.log('RoundTrip comparison difference warning count : ', compareResult.getBlueprintComparisonWarningCount());

console.log('RoundTrip comparison errors                   : ');
console.log(JSON.stringify(compareResult.getBlueprintComparisonErrors(), null, 2));

console.log('RoundTrip comparison warnings                 : ');
console.log(JSON.stringify(compareResult.getBlueprintComparisonWarnings(), null, 2));
