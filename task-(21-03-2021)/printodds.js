// const readline = require("readline");
// const inp = readline.createInterface({
//   input: process.stdin
// });
// const userInput = [];
// inp.on("line", (data) => {
//   userInput.push(data);
// });

// inp.on("close", () => {
//   console.log(userInput);
// });
let ar = [1,2,3,4,5]

//anonymous function
let hello = function(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
      console.log(arr[i])
    }
  }
}
hello(ar);

//iife
(function(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
      console.log(arr[i])
    }
  }
})(ar);