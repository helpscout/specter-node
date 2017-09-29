import FakerTypes from './constants/FakerTypes'
import { getSpecsFromFile } from './utils/file'
import { isSpecterVariable, stripVariableToken } from './utils/variable'
import { flattenObjectValuesToArray } from './utils/objects'
import { isCorrectType } from './utils/types'
import { warn } from './utils/log'

/**
 * Test helper method that matches an API response against the original
 * spec by type-checking.
 *
 * @param object   $response   API response
 * @param string   $spec       Specter specfile name
 *
 * @warns $response not a valid object
 * @warns $spec does not exist
 * @return boolean
 */
const assertResponseContent = (response, spec) => {
  if (typeof response !== 'object') {
    warn('assertResponseContent(): Response is not a valid object')
    return false
  }
  if (!spec || typeof spec !== 'string') {
    warn('assertResponseContent(): Spec name needs to be a valid string')
    return false
  }

  const schema = getSpecsFromFile(spec)
  if (!schema) return false

  const a = flattenObjectValuesToArray(response)
  const b = flattenObjectValuesToArray(schema)

  if (a.length !== b.length) return false

  const types = b.map(o => isSpecterVariable(o) ? FakerTypes[stripVariableToken(o)] : typeof o)

  const assert = a.map((o, index) => isCorrectType(o, types[index]))

  return !assert.filter(a => !a).length
}

export default assertResponseContent
