let arr = ['a','b','c','d','a','b']
arr1 = []

let f= function(arr){
arr.forEach((a)=>{
    if(!arr1.includes(a)){
        arr1.push(a)
    }
})
}
f(arr)
//iife
(function(arr){
    arr.forEach((a)=>{
        if(!arr1.includes(a)){
            arr1.push(a)
        }
    })
    })(arr)
