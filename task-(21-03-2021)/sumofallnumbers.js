
let ar = [1,2,3,4,5]
let sum1=0
let sum2=0
//anonymous function
let hello = function(arr){
  for(let i=0;i<arr.length;i++){
    sum1=sum1+arr[i]
  }
  console.log(sum1)
}
hello(ar);

//iife
(function(arr){
  for(let i=0;i<arr.length;i++){
    sum2=sum2+arr[i]
  }
  console.log(sum2)
})(ar);