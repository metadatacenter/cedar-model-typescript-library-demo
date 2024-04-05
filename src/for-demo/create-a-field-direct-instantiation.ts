import {
  CedarArtifactId,
  CedarBuilders,
  LinkField,
  LinkFieldBuilder,
  TemporalFieldBuilder,
  TextArea,
  TextAreaBuilder,
  TextField,
  TextFieldBuilder,
} from 'cedar-model-typescript-library';

// const linkField0: LinkField = new LinkField();
const linkField1: LinkField = LinkField.buildEmptyWithDefaultValues();
const linkField2: LinkField = LinkField.buildEmptyWithNullValues();
const linkField3: LinkField = CedarBuilders.linkFieldBuilder().build();
const linkField4: LinkField = new LinkFieldBuilder().build();

const textField1: TextField = CedarBuilders.textFieldBuilder().build();

const textFieldBuilder: TextFieldBuilder = CedarBuilders.textFieldBuilder();
textFieldBuilder.withTitle('foo');
const textField2: TextField = textFieldBuilder.build();
textField2.at_id = CedarArtifactId.forValue('foo');

const textArea0: TextArea = CedarBuilders.textAreaBuilder().build();

const textAreaBuilder1 = CedarBuilders.textAreaBuilder();
textAreaBuilder1.withTitle('foo');
const textArea1: TextArea = textAreaBuilder1.build();
textArea1.at_id = CedarArtifactId.forValue('foo');

const builder1: TextFieldBuilder = CedarBuilders.textFieldBuilder();
const builder2: TextAreaBuilder = CedarBuilders.textAreaBuilder();
const builder3: TemporalFieldBuilder = CedarBuilders.temporalFieldBuilder();
