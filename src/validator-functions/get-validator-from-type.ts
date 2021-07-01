import Ajv, { Options, ValidateFunction } from 'ajv'
import { Config } from "ts-json-schema-generator";

export function getValidatorFromType<_T> (schemaGenerationOptions?: Omit<Config, "tsconfig">, ajvOptions?: Options): ValidateFunction {
    const ajv = new Ajv(ajvOptions)
    return ajv.compile(schemaGenerationOptions as any)
}
