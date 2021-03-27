let a = ['madam','tomato','hello']



let checkpalindrome = function(arr){
    let d = []
    for(let i=0;i<arr.length;i++){
        let c = arr[i].split('')
        c = c.reverse();
        let b=c.join('');
        if(arr[i]==b){
            d.push(arr[i])
        }
    }
    return d;
}

//iife
(function(arr){
    let d = []
    for(let i=0;i<arr.length;i++){
        let c = arr[i].split('')
        c = c.reverse();
        let b=c.join('');
        if(arr[i]==b){
            d.push(arr[i])
        }
    }
    return d;
})(a)