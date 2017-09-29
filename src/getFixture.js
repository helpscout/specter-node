import remapToFaker from './remapToFaker'
import { getSpecsFromFile } from './utils/file'
import { warn } from './utils/log'

/**
 * Generates fixture data based on a spec file
 *
 * @param string   $spec   name of file to generate
 *
 * @warns $spec not a valid string
 * @warns file not found
 * @return object
 */
const getFixture = (spec) => {
  if (!spec || typeof spec !== 'string') {
    warn('getFixture(): Spec name needs to be a valid string')
    return false
  }
  const specs = getSpecsFromFile(spec)
  if (!specs) return false

  return remapToFaker(specs)
}

export default getFixture
