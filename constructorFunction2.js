function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function(number){
    return number * this.favoriteNumber;
  }
}

// var person = new Person("Sandra", "Woodchucks", "red", 15);
// person
// person.multiplyFavoriteNumber(2);
