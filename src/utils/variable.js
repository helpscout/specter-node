/**
 * Determines whether a value is a Specter variable
 *
 * @param string  $value   Value to check
 *
 * @returns boolean
 */
export const isSpecterVariable = value => {
  return value.length > 2 && value[0] === '@' && value[value.length - 1] === '@'
}

/**
 * Sanitizes and removes the @ symbol from a Specter variable
 *
 * @param string  $variable   Variable to sanitize
 *
 * @returns string
 */
export const stripVariableToken = (value) => {
  return isSpecterVariable(value) ? value.slice(1, value.length - 1) : value
}
