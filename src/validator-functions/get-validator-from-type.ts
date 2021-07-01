import Ajv, { Options, ValidateFunction } from 'ajv'
import { Config } from "ts-json-schema-generator";

export function getValidatorFromType<T> (schemaGenerationOptions?: Omit<Config, "tsconfig">, ajvOptions?: Options): ValidateFunction<T> {
    const ajv = new Ajv(ajvOptions)
    return ajv.compile<T>(schemaGenerationOptions as any)
}
