import { isSpecterVariable, stripVariableToken } from '../../src/utils/variable'

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
