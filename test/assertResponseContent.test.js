import { assertResponseContent, getFixture } from '../src/'

const response = spec => getFixture(spec)

const badResponse = spec => {
  const response = getFixture(spec)
  return Object.assign({}, response, {
    invalidSchemaKey: 'wut'
  })
}

describe('assertResponseContent', () => {
  it('should return false with invalid arguments', () => {
    expect(assertResponseContent()).to.be.false()
    expect(assertResponseContent(true)).to.be.false()
    expect(assertResponseContent({}, true)).to.be.false()
    expect(assertResponseContent({}, 'nope')).to.be.false()
    expect(assertResponseContent({}, 'user')).to.be.false()
  })

  it('should return true with a valid spec response', () => {
    expect(assertResponseContent(response('user'), 'user')).to.be.true()
  })

  it('should return false with an invalid spec response', () => {
    expect(assertResponseContent(badResponse('user'), 'user')).to.be.false()
  })

  it('should return false with an invalid spec response', () => {
    expect(assertResponseContent(badResponse('user'), 'user')).to.be.false()
  })
})
