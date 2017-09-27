import faker from 'faker'

export default {
  city: faker.address.city,
  country: faker.address.country,
  postcode: faker.address.zipCode,
  stateAbbr: faker.address.stateAbbr,
}
