import remapToFaker from './remapToFaker'
import { getSpecsFromFile } from './utils/file'
import { warn } from './utils/log'

const config = {
  src: './specs',
  dest: './output'
}

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
