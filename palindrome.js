// function palindrome(str){
//   if([...str].reverse().join("") == str){
//     console.log("I am a palindrome")
//   } else{
//     console.log("I am not a palindrome")
//   }
// }

function palindrome(str){
  return [...str].reverse().join("") == str;
}
