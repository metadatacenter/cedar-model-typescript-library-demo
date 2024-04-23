import { BioportalTermType, CedarBuilders, ControlledTermClassBuilder, ControlledTermField, Iri } from 'cedar-model-typescript-library';

const name: string = 'Field name';
const description: string = 'Field description';
const classUri: Iri = new Iri('http://purl.bioontology.org/ontology/LNC/LA19711-3');
const classSource: string = 'LOINC';
const classLabel: string = 'Human';
const classPrefLabel: string = 'Homo Spiens';
const classValueType: BioportalTermType = BioportalTermType.ONTOLOGY_CLASS;

const controlledTermField: ControlledTermField = CedarBuilders.controlledTermFieldBuilder()
  .withSchemaName(name)
  .withSchemaDescription(description)
  .addClass(
    new ControlledTermClassBuilder()
      .withLabel(classLabel)
      .withPrefLabel(classPrefLabel)
      .withSource(classSource)
      .withType(classValueType)
      .withUri(classUri)
      .build(),
  )
  .build();
