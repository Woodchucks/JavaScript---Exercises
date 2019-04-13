// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
// Add a property on the Person object called family which is an empty array.
// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should the length of the family array.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
Person.prototype.addToFamily = function(addPerson){
  if(addPerson instanceof Person){
      this.family.push(addPerson);
      return this.family.length;
  }
}
// var anna = new Person("Anna", "McDrive", "pink", 4);
// anna.fullName();
// var person = new Person("Elie", "Schoppik", "purple", 34)
// var anotherPerson = new Person("ula", "kado", "red", 23)
// person.addToFamily(anotherPerson);

// ==================================================================================
// Implement a function that reverses a string and place it on the String.prototype
String.prototype.reverse = function(text){
  var newStr = "";
  for(var i=this.length-1; i>=0; i--){
    newStr += this[i];
  }
  return newStr;
}
