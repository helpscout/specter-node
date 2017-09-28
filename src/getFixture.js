import remapToFaker from './remapToFaker'
import { getSpecsFromFile } from './utils/file'
import { warn } from './utils/log'

// Fake config file. Real configs should be a in a .specter.yml perhaps
const config = {
  src: './specs',
  dest: './output'
}

/**
  * Generates fixture data based on a spec file
  *
  * @param string   $specName   name of file to generate
  *
  * @warns $specName not a valid string
  * @warns file not found
  * @return object
  */
const getFixture = (specName) => {
  if (!specName || typeof specName !== 'string') {
    warn('getFixture() spec name needs to be a valid string')
    return false
  }

  const specs = getSpecsFromFile(`${config.src}/${specName}.json`)
  if (!specs) {
    warn(`getFixture(): Could not find ${specName}.json under ${config.src}`)
    return false
  }

  return remapToFaker(specs)
}

export default getFixture
