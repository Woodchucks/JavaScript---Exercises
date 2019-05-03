function removeDuplicateChar(str){
      return [...str].filter(function(val, idx, arr){
          return arr.indexOf(val) == idx;
      });
}
