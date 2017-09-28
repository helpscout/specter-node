import FakerMethods from './constants/FakerMethods'
import { stripVariableToken } from './utils/strings'

/**
  * Remaps PHP's faker methods to faker.js methods
  *
  * @param object   $specs   specter specs JSON
  *
  * @return object
  */
const remapToFaker = (specs) => {
  const newSpecs = Object.assign({}, specs)

  Object.keys(specs).map(key => {
    const value = specs[key]
    if (typeof value === 'object') {
      newSpecs[key] = remapToFaker(value)
    } else {
      const method = stripVariableToken(value)
      newSpecs[key] = value.indexOf('@') === 0 ? FakerMethods[method]() : value
    }
  })

  return newSpecs
}

export default remapToFaker
