import FakerMethods from '../constants/FakerMethods'

/**
 * Determines whether a value is a Specter variable
 *
 * @param string  $value   Value to check
 *
 * @returns boolean
 */
export const isSpecterVariable = (value) => {
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

/**
 * Generates Faker data from a variable. An series of variables
 * (split based on a pipe) will return an array of corresponding Faker data.
 *
 * @param string    $variables    Variable(s) to transform
 *
 * @returns array/string
 */
export const getFakerDataFromVariables = (variables) => {
  if (typeof variables !== 'string' && !Array.isArray(variables)) return variables

  const variablesList = typeof variables === 'string' ? variables.split() : variables

  const fixtureData = variablesList.map(variable => {
    const value = stripVariableToken(variable)
    return FakerMethods[value] ? FakerMethods[value]() : value
  })

  return fixtureData.length > 1 ? fixtureData : fixtureData[0]
}
