var person = {
  name: "Sandra",
  age: 27,
  oneWheel: function(){
    return this.name + " likes riding on one wheel bikes"
  },
  daughter: {
    name: "Lena",
    age: 10 + "months",
    hobby: function(){
      return this.name + " likes crawling"
    }
  }
}

var Pawel = {
  name: "Pawel",
  calculate: function(a,b,c,d){
    return this.name + " calculated " + (a+b+c+d)
  },
  sayHi: function(){
    setTimeout(function(){
      console.log("hi " + this.name)
    }.bind(this), 2000)
}
}

function secondPerson(firstname, lastname){
  this.firstname = firstname,
  this.lastname = lastname
}

var Sandra = new secondPerson("Sandra", "Woodchuck");

//EXERCISES
//Sandra likes crawling
person.daughter.hobby.call(person)
//Pawel likes riding on one wheel bikes
person.oneWheel.call(Pawel)
//Sandra calculated 15
Pawel.calculate.apply(person, [3,4,5,3])
//print out firstname and lastname of Lisa Heigright
var Lisa = new secondPerson("Lisa", "Heigright")
Lisa.firstname
Lisa.lastname
//Sandra calculated 3+4, then 3+4+5+6
var calcu2 = Pawel.calculate.bind(person, 3,4)
calcu2(5,6)

