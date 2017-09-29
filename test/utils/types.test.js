import { isCorrectType } from '../../src/utils/types'

describe('isCorrectType', () => {
  it('should return false if arguments are invalid', () => {
    expect(isCorrectType()).to.be.false()
    expect(isCorrectType([])).to.be.false()
    expect(isCorrectType([], true)).to.be.false()
    expect(isCorrectType([], true)).to.be.false()
  })

  it('should be able to check for string types', () => {
    expect(isCorrectType('', 'string')).to.be.true()
    expect(isCorrectType('Hello', 'string')).to.be.true()
    expect(isCorrectType('0', 'string')).to.be.true()
  })

  it('should be able to check for boolean types', () => {
    expect(isCorrectType(true, 'boolean')).to.be.true()
    expect(isCorrectType(false, 'boolean')).to.be.true()
  })

  it('should be able to check for number types', () => {
    expect(isCorrectType(0, 'number')).to.be.true()
    expect(isCorrectType(123, 'number')).to.be.true()
    expect(isCorrectType(123, 'string')).to.be.false()
  })

  it('should be able to check for array of types', () => {
    expect(isCorrectType('', ['string', 'boolean'])).to.be.true()
    expect(isCorrectType('', ['string', 'function', 'boolean'])).to.be.true()
    expect(isCorrectType(13, ['string', 'boolean'])).to.be.false()
    expect(isCorrectType(false, ['string', 'boolean'])).to.be.true()
    expect(isCorrectType(true, ['string', 'boolean'])).to.be.true()
    expect(isCorrectType(true, ['boolean'])).to.be.true()
  })
})
