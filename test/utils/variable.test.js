import { isSpecterVariable, getFakerDataFromVariables, stripVariableToken } from '../../src/utils/variable'

describe('isSpecterVariable', () => {
  it('should return false for non variables', () => {
    expect(isSpecterVariable('nope')).to.be.false()
    expect(isSpecterVariable('name@email.com')).to.be.false()
    expect(isSpecterVariable('name@email.com@')).to.be.false()
    expect(isSpecterVariable('')).to.be.false()
    expect(isSpecterVariable('@')).to.be.false()
    expect(isSpecterVariable('@@')).to.be.false()
  })

  it('should return true for variables', () => {
    expect(isSpecterVariable('@var@')).to.be.true()
    expect(isSpecterVariable('@name@email.com@')).to.be.true()
    expect(isSpecterVariable('@@name@email.com@@')).to.be.true()
  })
})

describe('stripVariableToken', () => {
  it('should not change non-variables', () => {
    expect(stripVariableToken('nope')).to.equal('nope')
    expect(stripVariableToken('@nope')).to.equal('@nope')
    expect(stripVariableToken('nope@')).to.equal('nope@')
    expect(stripVariableToken('name@email')).to.equal('name@email')
  })

  it('should change variables', () => {
    expect(stripVariableToken('@yup@')).to.equal('yup')
    expect(stripVariableToken('@name@email@')).to.equal('name@email')
    expect(stripVariableToken('@@name@email@@')).to.equal('@name@email@')
  })
})

describe('getFakerDataFromVariables', () => {
  it('should returm false if invalid argument', () => {
    expect(getFakerDataFromVariables()).to.equal(undefined)
    expect(getFakerDataFromVariables(123)).to.equal(123)
    expect(getFakerDataFromVariables({ name: '@firstName@' })).to.be.an('object')
  })

  it('should handle array variables', () => {
    const spec = {
      name: ['@firstName@', '@lastName@']
    }
    const fixture = getFakerDataFromVariables(spec.name)

    expect(fixture).to.be.an('array')
    expect(fixture[0]).to.not.equal('firstName')
    expect(fixture[0]).to.not.equal('@firstName')
    expect(fixture[0]).to.not.equal('@firstName@')
    expect(fixture[0]).to.not.equal('@firstName|')
    expect(fixture[1]).to.not.equal('lastName')
    expect(fixture[1]).to.not.equal('@lastName')
    expect(fixture[1]).to.not.equal('@lastName@')
    expect(fixture[1]).to.not.equal('@lastName|')
  })
})
