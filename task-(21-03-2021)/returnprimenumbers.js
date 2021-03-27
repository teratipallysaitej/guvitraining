let ar = [21,22,37,41,56]
let count = 0

//anonymous function
let hello = function(arr){
    let ar1 = []
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<=ar[i];j++){
            if(ar[i]%j==0){
                count=count+1
            }
        }
        if(count==2){
            console.log(arr[i])        
        }
        count = 0
}
//console.log(ar1)
}

//iife
