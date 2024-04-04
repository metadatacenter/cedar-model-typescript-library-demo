# CEDAR Model Typescript Library Demo

## How to run
As of now, the `cedar-model-typescript-library` has not yet been published to npm.

You will need to build and link it locally.
Clone the [repo](https://github.com/metadatacenter/cedar-model-typescript-library), check out the `develop` branch, and then:  

```shell
npm install
npm run build
npm run link
```
Then in this project you will use the project through a symlink:
```shell
npm install
npm link cedar-model-typescript-library
```

Run one of the files:
```shell
npx ts-node src/json-field/field-create-builder-json.ts
npx ts-node src/json-field/field-create-default-json.ts

npx ts-node src/json-template/template-create-json.ts
npx ts-node src/json-template/template-read-json.ts
npx ts-node src/json-template/template-with-fields-json
```

Running the validator:
```shell
node dist/validator/json-validator.js src/json-template/template.json
npx ts-node src/validator/json-validator.ts src/json-template/template.json

node dist/validator/json-validator.js src/json-field/field.json
npx ts-node src/validator/json-validator.ts src/json-field/field.json

```
