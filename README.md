# CEDAR Model Typescript Library Demo

## How to run
For now the `cedar-model-typescript-library` is not yet published to `npm`.

You will need to build and link it locally:

```typescript
cd cedar-model-typescript-library
tsc
cd dist
npm link
```
Then in this project you will do:
```
npm install
npm link cedar-model-typescript-library
npx ts-node src/json-template/read-json.ts
```
