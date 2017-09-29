import { getFixture } from '../src/'
import { getSpecsFromFile } from '../src/utils/file'

describe('getFixture', () => {
  it('should return an object from a valid specter file', () => {
    expect(getFixture('user')).to.be.an('object')
  })

  it('should return false if no argument is passed ', () => {
    expect(getFixture()).to.be.false()
  })

  it('should return false argument is invalid', () => {
    expect(getFixture(true)).to.be.false()
    expect(getFixture([])).to.be.false()
    expect(getFixture(['user'])).to.be.false()
    expect(getFixture(123)).to.be.false()
    expect(getFixture('')).to.be.false()
  })

  it('should return false if specter file cannot be found', () => {
    expect(getFixture('nope')).to.be.false()
  })

  it('should parse specter @vars@', () => {
    const fixture = getFixture('user')

    Object.keys(fixture).forEach(key => {
      const val = fixture[key]
      if (typeof val === 'string') {
        expect(fixture[key]).to.not.contain('@')
      }
    })
  })

  it('should match data structure of spec file', () => {
    const fixture = getFixture('user')
    const specs = getSpecsFromFile('user')

    Object.keys(fixture).forEach(key => {
      const val = fixture[key]
      if (typeof val === 'string') {
        expect(specs[key]).to.be.a('string')
      }
    })
  })

  it('should not get faker data for non @vars@', () => {
    const fixture = getFixture('user')
    const specs = getSpecsFromFile('user')

    expect(fixture[Object.keys(fixture)[0]]).to.equal(specs[Object.keys(specs)[0]])
  })
})
