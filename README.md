# Word Cloud

You work for a tech conference company. Somebody transcribes all the noteworthy quotes from all the speakers, and enters them into a system. This system outputs a JSON file that looks like this:

```
{
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
}
```

Your mission is to turn that data into an object that can be used by a word cloud. The output should look like this:

```
{
  "optimize" : { count: 1, people: ["Ila Huels"] },
  "web-enabled" : { count: 1, people: ["Ila Huels"] },
  "supply-chains" : { count: 1, people: ["Ila Huels"] },
  "brand" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "sexy" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "channels" : { count : 2, people : ["Ila Huels", "Cristopher Feest"] },
  "envisioneer" : { count: 1, people: ["Ila Huels"] },
  "robust" : { count: 1, people: ["Ila Huels"] },
  "e-commerce" : { count: 1, people: ["Ila Huels"] },
  "transform" : { count: 1, people: ["Ila Huels"] },
  "wireless" : { count: 1, people: ["Ila Huels"] },
  "architectures" : { count: 1, people: ["Ila Huels"] },
  "benchmark" : { count: 3, people: ["Ila Huels", "Cristopher Feest"] },
  "cross-platform" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "partnerships" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "24/7" : { count: 1, people: ["Cristopher Feest"] },
  "paradigms" : { count: 1, people: ["Cristopher Feest"] }
}
```

The words appear in a mix of uppercase and lowercase letters, but the resulting word-cloud should be all lowercase.

## EXERCISE
In `src/word_cloud.js` write a function (or functions) that processes all the words in the `data/quotes.json` file
and outputs the above desired result.

## TEST DRIVING IT!

```
jasmine init
spec/word_cloud_spec.js
```

__You will need to:__

* Export your function(s) to your spec file

```
module.exports = {
  someFunc: function() {
    return "hello";
  }
}
```
__Jasmine tests look like this__

```
describe('Somewhat general description', function() {
  it('more specific description here', function() {


    })
  })

```

__HELP__

* Practice breaking the problem into tiny bits, don't bite it all off at once.
* User smaller samples of data in your tests
* After achieving desired results with sample data, run your giant file
through to confirm it works with your actual data

__SEE TESTS BRANCH FOR PROVIDED TESTS__

# Objectives

__Be able to:__

* Install Jasmine
* Practice TDD to complete the exercises
* Observe using small samples of larger data to write tests
* Iterate through objects and arrays
* Dynamically generate objects and arrays

__HINT:__ Use the sample data here to help write your tests.

# Set Up

```
fork and clone
jasmine (make the tests pass)
```
# Indexing

You work for a tourism agency, and your job is to promote amusement parks. You have been given a list of amusement parks and you need to write code to help organize the data.

Your mission, should you choose to accept it, is to group amusement parks by
* ID
* Country
* Country / State

## Challenge 1 - Indexing by ID

You need to provide a way to get extremely fast access to amusement parks by their ID.

So given the following array

```js
[
  {
    id: 546,
    name: "Kalahari Resorts",
    city: "Wisconsin Dells",
    state: "Wisconsin",
    country: "United States"
  },
  {
    id: 547,
    name: "Little Amerricka",
    city: "Marshall",
    state: "Wisconsin",
    country: "United States"
   }
 ]
```

Your code should produce the following object

```js
{
  546 : {
    id: 546,
    name: "Kalahari Resorts",
    city: "Wisconsin Dells",
    state: "Wisconsin",
    country: "United States"
  },
  547 : {
    id: 547,
    name: "Little Amerricka",
    city: "Marshall",
    state: "Wisconsin",
    country: "United States"
   }
}
```
## Challenge 2 - Indexing by Country

So given the following array

```js
[
  {
    id: 546,
    name: "Kalahari Resorts",
    city: "Wisconsin Dells",
    state: "Wisconsin",
    country: "United States"
  },
  {
    id: 547,
    name: "Little Amerricka",
    city: "Marshall",
    state: "Wisconsin",
    country: "United States"
   },
  {
    id: 2,
    name: "Calaway Park",
    city: "Calgary",
    state: "Alberta",
    country: "Canada"
  }
]
```

Your code should produce the following object

```js
{
  "Canada" : [
    {
      id: 2,
      name: "Calaway Park",
      city: "Calgary",
      state: "Alberta",
      country: "Canada"
    }
  ],
  "United States" : [
    {
      id: 546,
      name: "Kalahari Resorts",
      city: "Wisconsin Dells",
      state: "Wisconsin",
      country: "United States"
    },
    {
      id: 547,
      name: "Little Amerricka",
      city: "Marshall",
      state: "Wisconsin",
      country: "United States"
     }
  ]
}
```

## Challenge 3 - Indexing by Country and State

Given the following array

```js
[
  {
    id: 3,
    name: "Galaxyland",
    city: "Edmonton",
    state: "Alberta",
    country: "Canada"
  },
  {
    id: 4,
    name: "Heratage Park",
    city: "Calgary",
    state: "Alberta",
    country: "Canada"
  },
  {
    id: 6,
    name: "Playland (Vancouver)",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada"
  },
  {
    id: 8,
    name: "Crystal Palace Amusement Park",
    city: "Dieppe",
    state: "New Brunswick",
    country: "Canada"
  }
]
```

Your code should return the following object

```js
{
  "Alberta, Canada" : [
    {
      id: 3,
      name: "Galaxyland",
      city: "Edmonton",
      state: "Alberta",
      country: "Canada"
    },
    {
      id: 4,
      name: "Heratage Park",
      city: "Calgary",
      state: "Alberta",
      country: "Canada"
    },
  ],
  "British Columbia, Canada" : [
    {
      id: 6,
      name: "Playland (Vancouver)",
      city: "Vancouver",
      state: "British Columbia",
      country: "Canada"
    },
  ],
  "New Brunswick, Canada" : [
    {
      id: 8,
      name: "Crystal Palace Amusement Park",
      city: "Dieppe",
      state: "New Brunswick",
      country: "Canada"
    }
  ]
}
```
