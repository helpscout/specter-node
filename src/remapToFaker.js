import { getFakerDataFromVariables } from './utils/variable'
import { warn } from './utils/log'

/**
 * Remaps PHP's faker methods to faker.js methods
 *
 * @param object   $specs   specter specs JSON
 *
 * @warns specs must be an object
 * @return object
 */
const remapToFaker = (specs) => {
  if (typeof specs !== 'object') {
    warn('remapToFaker(): Argument must be an object.')
    return false
  }

  return Object.keys(specs).reduce((newSpecs, key) => {
    const value = specs[key]
    /* istanbul ignore next */
    // Nested objects is tested. Istanbul just isn't picking it up
    if (typeof value === 'object' && !Array.isArray(value)) {
      newSpecs[key] = remapToFaker(value)
    } else {
      newSpecs[key] = getFakerDataFromVariables(value)
    }

    return newSpecs
  }, Object.assign({}, specs))
}

export default remapToFaker
