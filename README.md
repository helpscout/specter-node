# Specter [![Build Status](https://travis-ci.org/helpscout/node-specter.svg?branch=master)](https://travis-ci.org/helpscout/node-specter) [![Coverage Status](https://coveralls.io/repos/github/helpscout/node-specter/badge.svg?branch=master)](https://coveralls.io/github/helpscout/node-specter?branch=master)

This is the Node port of our [PHP Specter library](https://github.com/helpscout/specter).

**Still WIP!**


## Installation

```
npm install @helpscout/specter --save-dev
```


## Demonstration

Work together among your development teams to spec a new endpoint and create a
Specter JSON file that defines your new endpoint. This is a Specter JSON file (`customer.json`):

```json
{
  "__specter": "Sample customer record",
  "id": "@randomDigitNotNull@",
  "fname": "@firstName@",
  "lname": "@lastName@",
  "company": "@company@",
  "jobTitle": "@jobTitle@",
  "background": "@catchPhrase@",
  "address": {
    "city": "@city@",
    "state": "@stateAbbr@",
    "zip": "@postcode@",
    "country": "@country@"
  },
  "emails": ["@companyEmail@", "@freeEmail@", "@email@" ]
}
```

Generate the fixture data based on the spec data model:

```js
import { getFixture } from '@helpscout/specter'

getFixture('customer')
```


The output will be:
```json
{
   "__specter":"Sample customer record",
   "id":6,
   "fname":"Glenda",
   "lname":"Trantow",
   "company":"Kerluke, Rodriguez and Wisoky",
   "jobTitle":"Power Generating Plant Operator",
   "background":"Configurable multi-state standardization",
   "address":{
      "city":"Georgiannachester",
      "state":"TX",
      "zip":"89501",
      "country":"Afghanistan"
   },
   "emails":[
      "dward@friesen.org",
      "nwisozk@gmail.com",
      "juliet.dooley@yahoo.com"
   ]
}
```
