import { CedarBuilders, LinkField, TemporalFieldBuilder, TextArea, TextField } from 'cedar-model-typescript-library';

const linkField1: LinkField = CedarBuilders.linkFieldBuilder().build();

const textField1: TextField = CedarBuilders.textFieldBuilder().build();

const textArea0: TextArea = CedarBuilders.textAreaBuilder().build();

const temoralField0: TemporalFieldBuilder = CedarBuilders.temporalFieldBuilder();
