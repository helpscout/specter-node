import { getSpecsFromFile } from '../../src/utils/file'
import { isSpecterVariable } from '../../src/utils/variable'

describe('getSpecsFromFile', () => {
  it('should return false if file does not exist', () => {
    expect(getSpecsFromFile('nopenopenope')).to.be.false()
  })

  it('should Specter object if file exists', () => {
    const specs = getSpecsFromFile('user')

    expect(specs).to.be.an('object')
    expect(isSpecterVariable(specs.company)).to.be.true()
  })
})
