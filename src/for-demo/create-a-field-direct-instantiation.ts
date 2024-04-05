import { CedarArtifactId, CedarBuilders, LinkField, LinkFieldBuilder, TextField, TextFieldBuilder } from 'cedar-model-typescript-library';

// const linkField0: LinkField = new LinkField();
const linkField1: LinkField = LinkField.buildEmptyWithDefaultValues();
const linkField2: LinkField = LinkField.buildEmptyWithNullValues();
const linkField3: LinkField = CedarBuilders.linkFieldBuilder().build();
const linkField4: LinkField = new LinkFieldBuilder().build();

const textField3: TextField = CedarBuilders.textFieldBuilder().build();

const textFieldBuilder: TextFieldBuilder = CedarBuilders.textFieldBuilder();
textFieldBuilder.withTitle('foo');
const textField: TextField = textFieldBuilder.build();
textField.at_id = CedarArtifactId.forValue('foo');
