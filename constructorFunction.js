function childrenNames(){
  var female = ["Lena", "Julia", "Tosia"];
  var male = ["Paweł", "Natanel", "Samuel"];
  return {
    getFemaleNames: function(){
    return female;
    },
    createFemaleName: function(girl){
      female.push(girl);
      return female;
    },
    getMaleNames: function(){
    return male;
    },
    createMaleName: function(boy){
      male.push(boy);
      return male;
    }
  }
}

//var firstNames = childrenNames();
//firstNames.getFemaleNames();
//firstNames.createFemaleName("Oliwia");
//var secondNames = childrenNames();
//secondNames.getFemaleNames();
