import * as path from 'path';
import * as fs from 'fs';
import {
  AbstractArtifact,
  CedarArtifactType,
  CedarJSONReaders,
  CedarJSONWriters,
  CedarReaders,
  CedarWriters,
  JSONAbstractArtifactReader,
  JSONAbstractArtifactWriter,
  JSONArtifactReaderResult,
  RoundTrip,
} from 'cedar-model-typescript-library';

const filePath = path.join(process.cwd(), './template.json');
const artifactSource = fs.readFileSync(filePath, 'utf8');

const readers: CedarJSONReaders = CedarReaders.json().getStrict();
const cedarArtifactType: CedarArtifactType = CedarReaders.json().detectArtifactType(artifactSource);
const artifactReader: JSONAbstractArtifactReader = readers.getReaderForArtifactType(cedarArtifactType);

const jsonArtifactReaderResult: JSONArtifactReaderResult = artifactReader.readFromString(artifactSource);
console.log('Parsing error count:', jsonArtifactReaderResult.parsingResult.getBlueprintComparisonErrorCount());
console.log('Parsing warning count:', jsonArtifactReaderResult.parsingResult.getBlueprintComparisonWarningCount());

const artifact: AbstractArtifact = jsonArtifactReaderResult.artifact;

const writers: CedarJSONWriters = CedarWriters.json().getStrict();
const jsonWriter: JSONAbstractArtifactWriter = writers.getJSONWriterForArtifact(artifact);

const artifactReSerialized = jsonWriter.getAsJsonString(artifact);

const compareResult = RoundTrip.compare(artifactSource, artifactReSerialized);
console.log('RoundTrip comparison difference error count:', compareResult.getBlueprintComparisonErrorCount());
console.log('RoundTrip comparison difference warning count:', compareResult.getBlueprintComparisonWarningCount());

console.log('RoundTrip comparison errors:');
console.log(compareResult.getBlueprintComparisonErrors());

console.log('RoundTrip comparison warnings:');
console.log(compareResult.getBlueprintComparisonWarnings());
