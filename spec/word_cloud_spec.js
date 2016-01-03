var wordCloud = require('../src/word_cloud');

describe("Returns single strings for a key in an object", function(){
  var testConf = {
    "John Smith" : [
      ["hello my name is stuart"], ["I am very crazy"], ["yes I am"]
    ],
    "Adam Sandler" : [
      ["hello my name is bob"], ["I am very crazy"], ["yes I am"]
    ]
  };
  var testConfAnswer = {
    "John Smith" : ["hello", "my", "name", "is", "stuart", "I", "am", "very", "crazy", "yes", "I", "am"],
    "Adam Sandler" : ["hello", "my", "name", "is", "bob", "I", "am", "very", "crazy", "yes", "I", "am"]
  }
  it('Slices and dices', function(){
    expect(wordCloud.smoother(testConf)).toEqual(testConfAnswer)
  })
})

describe("Makes a new word object", function(){
  var wordObj = { count: 1, people: ["Adam Sandler"]}
  it('Takes the person who said a word, and makes a new word object', function(){
    expect(wordCloud.newWord("Adam Sandler")).toEqual({count: 1, people: ["Adam Sandler"]})
  })
})

describe("Turns an array into an object", function(){
  var originalword = "thing";
  var wordObj = {
    "thing" : { count: 1, people: ["Adam Sandler"]}
  }
  it('takes the word and adds a person', function(){
    expect(wordCloud.putter("thing", "Adam Sandler", {})).toEqual(wordObj);
  })
  var newWordObj = {
    "thing" : { count: 2, people: ["Adam Sandler", "Benny Hana"]}
  }
  it('can handle an object already having a word', function(){
    expect(wordCloud.putter("thing", "Benny Hana", {"thing" : {count: 1, people: ["Adam Sandler"]}})).toEqual(newWordObj);
  })
  var newNewWordObj = {
    "thing" : { count: 2, people: ["Adam Sandler"]}
  }
  it('can handle a people object already having a person', function(){
    expect(wordCloud.putter("thing", "Adam Sandler", {"thing" : {count: 1, people:["Adam Sandler"]}})).toEqual(newNewWordObj);
  })
})

describe("Loops through an array and creates a new word object", function(){
  var newObject = {
    "Adam Sandler" : [
      ["one word"],
      ["one word"]
    ]
  };
  var wordObject ={
    "one" : {count : 2, people: ["Adam Sandler"]},
    "word" : {count: 2, people: ["Adam Sandler"]}
  }
  it("and spits out a new word object with people and counts", function(){
    expect(wordCloud.parsr(newObject)).toEqual(wordObject);
  })
})
