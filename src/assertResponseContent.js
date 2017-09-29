import { getSpecsFromFile } from './utils/file'
import { flattenObjectValuesToArray } from './utils/objects'
import { isCorrectType, getTypeMatchesFromArray } from './utils/types'
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

  const types = getTypeMatchesFromArray(b)
  const assert = a.map((o, index) => isCorrectType(o, types[index]))

  return !assert.filter(a => !a).length
}

export default assertResponseContent
