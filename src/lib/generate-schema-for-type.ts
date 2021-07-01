import * as ts from 'typescript'
import { toLiteral } from './to-literal'
import { fromLiteral } from './from-literal'
import { ValidateCallOptions } from './ValidateCallOptions'
import { createFormatter, createParser, SchemaGenerator } from 'ts-json-schema-generator'

export function generateSchemaForType (typeName: string, program: ts.Program, schemaOptions: ValidateCallOptions[ 'schema' ]) {
  const schemaArgs = schemaOptions ? fromLiteral(schemaOptions) : {}
  const parser = createParser(program, schemaArgs);
  const formatter = createFormatter(schemaArgs);
  const schema = new SchemaGenerator(program, parser, formatter).createSchema(typeName);

  if (!schema) {
    console.error(`WARNING: COULD NOT GENERATE SCHEMA FOR TYPE ${typeName}`)
  }

  return toLiteral(schema)
}
