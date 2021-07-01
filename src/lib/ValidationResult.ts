import { ValidateFunction } from 'ajv'

export type ValidationResult = {
    isValid: boolean,
    errors: ValidateFunction['errors']
}