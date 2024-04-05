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
  JsonArtifactReaderResult,
  RoundTrip,
} from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const artifactSource = fs.readFileSync(filePath, 'utf8');

const readers: CedarJsonReaders = CedarReaders.json().getStrict();
const cedarArtifactType: CedarArtifactType = CedarReaders.json().detectArtifactType(artifactSource);
const artifactReader: JsonAbstractArtifactReader = readers.getReaderForArtifactType(cedarArtifactType);

const jsonArtifactReaderResult: JsonArtifactReaderResult = artifactReader.readFromString(artifactSource);
console.log('Parsing error count:', jsonArtifactReaderResult.parsingResult.getBlueprintComparisonErrorCount());
console.log('Parsing warning count:', jsonArtifactReaderResult.parsingResult.getBlueprintComparisonWarningCount());

const artifact: AbstractArtifact = jsonArtifactReaderResult.artifact;

const writers: CedarJsonWriters = CedarWriters.json().getStrict();
const jsonWriter: JsonAbstractArtifactWriter = writers.getWriterForArtifact(artifact);

const artifactReSerialized = jsonWriter.getAsJsonString(artifact);

const compareResult = RoundTrip.compare(artifactSource, artifactReSerialized);
console.log('RoundTrip comparison difference error count:', compareResult.getBlueprintComparisonErrorCount());
console.log('RoundTrip comparison difference warning count:', compareResult.getBlueprintComparisonWarningCount());

console.log('RoundTrip comparison errors:');
console.log(compareResult.getBlueprintComparisonErrors());

console.log('RoundTrip comparison warnings:');
console.log(compareResult.getBlueprintComparisonWarnings());
