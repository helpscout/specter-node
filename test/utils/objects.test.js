import { flattenObjectKeysToArray, flattenObjectValuesToArray } from '../../src/utils/objects'

describe('flattenObjectKeysToArray', () => {
  it('should return false if arg is not an object', () => {
    expect(flattenObjectKeysToArray()).to.be.false()
    expect(flattenObjectKeysToArray(true)).to.be.false()
  })

  it('should return an array of keys for flat object', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3
    }

    expect(flattenObjectKeysToArray(o)).to.be.an('array')
    expect(flattenObjectKeysToArray(o)).to.have.lengthOf(3)
    expect(flattenObjectKeysToArray(o)[0]).to.equal('a')
    expect(flattenObjectKeysToArray(o)[1]).to.equal('b')
    expect(flattenObjectKeysToArray(o)[2]).to.equal('c')
  })

  it('should return an array of keys for nested object', () => {
    const o = {
      a: 1,
      b: {
        c: {
          d: 2
        }
      }
    }

    expect(flattenObjectKeysToArray(o)).to.be.an('array')
    expect(flattenObjectKeysToArray(o)).to.have.lengthOf(2)
    expect(flattenObjectKeysToArray(o)[0]).to.equal('a')
    expect(flattenObjectKeysToArray(o)[1]).to.equal('d')
  })
})

describe('flattenObjectValuesToArray', () => {
  it('should return false if arg is not an object', () => {
    expect(flattenObjectValuesToArray()).to.be.false()
    expect(flattenObjectValuesToArray(true)).to.be.false()
  })

  it('should return an array of values for flat object', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3
    }

    expect(flattenObjectValuesToArray(o)).to.be.an('array')
    expect(flattenObjectValuesToArray(o)).to.have.lengthOf(3)
    expect(flattenObjectValuesToArray(o)[0]).to.equal(1)
    expect(flattenObjectValuesToArray(o)[1]).to.equal(2)
    expect(flattenObjectValuesToArray(o)[2]).to.equal(3)
  })

  it('should return an array of keys for nested object', () => {
    const o = {
      a: 1,
      b: {
        c: {
          d: 2
        }
      }
    }

    expect(flattenObjectValuesToArray(o)).to.be.an('array')
    expect(flattenObjectValuesToArray(o)).to.have.lengthOf(2)
    expect(flattenObjectValuesToArray(o)[0]).to.equal(1)
    expect(flattenObjectValuesToArray(o)[1]).to.equal(2)
  })
})
