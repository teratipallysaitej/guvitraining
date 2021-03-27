let str = "hello"
//anonymous
let fn1 = function(str){
    console.log(str.toUpperCase())
}
//iife
fn1(str);
(function(str){
    console.log(str.toUpperCase())
})(str);