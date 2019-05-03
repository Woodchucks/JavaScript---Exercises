// function removeDuplicates(arr){
//   return([...new Set(arr)]);
// }

function removeDuplicates(arr){
  return arr.filter((v, i, arr) => arr.indexOf(v) === i);
}
