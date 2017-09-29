import FakerTypes from '../constants/FakerTypes'
import { isSpecterVariable, stripVariableToken } from './variable'

const getType = o => typeof o

/**
 * Determines whether a value matches the Faker type
 *
 * @param any             $value    The value to type check
 * @param string/array    $type     The valid type(s) to check against
 *
 * @return boolean
 */
export const isCorrectType = (value, type) => {
  if (getType(type) !== 'string' && !Array.isArray(type)) return false

  if (!Array.isArray(type)) {
    return getType(value) === type
  }

  return type
    .map(t => getType(value) === t)
    .filter(result => result).length > 0
}

/**
 * Remapsn an array of variables to boolean values based on whether they
 * match Specter variable specs
 *
 * @param array    $variables    The array of variables to match against
 *
 * @return array
 */
export const getTypeMatchesFromArray = (variables) => {
  if (!Array.isArray(variables)) return false

  /* istanbul ignore next */
  // Tests exist for this, but Istanbul isn't picking it up
  return variables.map(o => isSpecterVariable(o) ? FakerTypes[stripVariableToken(o)] : typeof o)
}
