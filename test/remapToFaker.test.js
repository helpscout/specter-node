import { remapToFaker } from '../src/'
import { getSpecsFromFile } from '../src/utils/file'
import { isSpecterVariable } from '../src/utils/variable'

describe('remapToFaker', () => {
  it('should return false with invalid arguments', () => {
    expect(remapToFaker()).to.be.false()
    expect(remapToFaker(true)).to.be.false()
    expect(remapToFaker(123)).to.be.false()
  })

  it('should return remapped spec object', () => {
    const specs = getSpecsFromFile('user')
    const remappedSpecs = remapToFaker(specs)

    expect(isSpecterVariable(specs.company)).to.be.true()
    expect(remappedSpecs).to.be.an('object')
    expect(isSpecterVariable(remappedSpecs.company)).to.be.false()
  })

  it('should handle nested objects', () => {
    const specs = getSpecsFromFile('user')
    const remappedSpecs = remapToFaker(specs)

    expect(remappedSpecs.address).to.be.an('object')
    expect(isSpecterVariable(remappedSpecs.address.city)).to.be.false()
  })
})
