let arr = [1,2,3,4,5,7,8]
let rotatearray = function(arr,k){
    for(let i =0;i<k;i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
//iife
(
    function(arr,k){
        for(let i =0;i<k;i++) {
            arr.unshift(arr.pop())
        }
        return arr
    }
)(arr)