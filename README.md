# CEDAR Model Typescript Library Demo

## How to install with the library from npmjs
```shell
npm install
```

## How to install while developing the library
You will need to build and link `cedar-model-typescript-library` it locally.
Clone the [repo](https://github.com/metadatacenter/cedar-model-typescript-library), check out the `develop` branch, and then:  

```shell
npm install
npm run build
npm run link
```
Then in this project you will use the project through a symlink.

Remove the `"cedar-model-typescript-library"` reference from the `package.json` file, then:

```shell
npm install
npm link cedar-model-typescript-library
```

## How to run

Run one of the files:
```shell
npx ts-node src/json-field/field-create-builder-json.ts
npx ts-node src/json-field/field-create-default-json.ts

npx ts-node src/json-template/template-create-json.ts
npx ts-node src/json-template/template-read-json.ts
npx ts-node src/json-template/template-with-fields-json.ts

npx ts-node src/for-demo/reading-a-template.ts
```

Running the validator:
```shell
node dist/validator/json-validator.js src/json-template/template.json
npx ts-node src/validator/json-validator.ts src/json-template/template.json

node dist/validator/json-validator.js src/json-field/field.json
npx ts-node src/validator/json-validator.ts src/json-field/field.json

```
