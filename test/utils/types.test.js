import { isCorrectType, getTypeMatchesFromArray } from '../../src/utils/types'

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

describe('getTypeMatchesFromArray', () => {
  it('should return false if arguments are invalid', () => {
    expect(getTypeMatchesFromArray()).to.be.false()
    expect(getTypeMatchesFromArray(true)).to.be.false()
    expect(getTypeMatchesFromArray('variable')).to.be.false()
  })

  it('should remap a list of variables', () => {
    const variables = ['@firstName@', '@lastName@']
    const o = getTypeMatchesFromArray(variables)

    expect(o.length).to.equal(variables.length)
    expect(o).to.be.an('array')
    expect(o[0]).to.equal('string')
    expect(o[1]).to.equal('string')
  })

  it('should determine type if not Specter variable', () => {
    const variables = ['nope', 0, '@firstName@', '@lastName@']
    const o = getTypeMatchesFromArray(variables)

    expect(o.length).to.equal(variables.length)
    expect(o).to.be.an('array')
    expect(o[0]).to.equal('string')
    expect(o[1]).to.equal('number')
  })
})
