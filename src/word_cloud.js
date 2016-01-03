module.exports = {

  smoother: function(Conference){
    for (var people in Conference){
      Conference[people] = Conference[people].join(" ").split(" ");
    }
    return Conference;
  },

  newWord: function(person){
    var object = {}
    object.count = 1;
    object.people = [person]
    return object;
  },

  putter: function(word, person, object){
    word = word.toLowerCase();
    if (! (word in object)){
      object[word] = this.newWord(person);
    }else{
      this.countAndCheck(object[word], person);
    }
    return object;
  },

  countAndCheck: function(object, person){
    object.count += 1;
    if (object.people.indexOf(person) < 0){
      object.people.push(person);
    }
    return object;
  },

  parsr: function(object){
    var newObj = {};
    object = this.smoother(object);
    for (people in object){
      for(var i=0; i<object[people].length; i++){
        this.putter(object[people][i], people, newObj);
      }
    }
    return newObj;
  }

}
