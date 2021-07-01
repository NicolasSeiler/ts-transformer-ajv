import Ajv, { Options } from 'ajv'
import { Config } from "ts-json-schema-generator";
import { ValidationResult } from '../lib/ValidationResult'


export function validateTypeWithAjv<_T> (data: any, ajvOptions?: Options): ValidationResult
export function validateTypeWithAjv<_T> (data: any, schemaGenerationOptions?: Omit<Config, "tsconfig">): ValidationResult
export function validateTypeWithAjv<_T> (data: any, schemaGenerationOptions: Omit<Config, "tsconfig"> | Options, ajvOptions: Options): ValidationResult
export function validateTypeWithAjv<_T> (data: any, schemaGenerationOptions?: Omit<Config, "tsconfig"> | Options, ajvOptions?: Options): ValidationResult {
    const ajv = new Ajv(ajvOptions)
    const isValid = ajv.validate(schemaGenerationOptions as any, data) as boolean

    return {
        isValid,
        errors: ajv.errors
    }
}