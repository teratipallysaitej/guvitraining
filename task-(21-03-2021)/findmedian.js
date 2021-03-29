var ar1 = [1,2,5,7,11]
var m = ar1.length
var ar2 = [3,9,13,16]
var n = ar2.length
var ar3 = []
var i=0;
var j=0;
var findmedian=(ar1,ar2,m,n)=>{
    while(i!=m-1&&j!=n-1){
        if(ar1[i]>=ar2[j]){
            ar3.push(ar2[j])
            j++
        }
        else{
            ar3.push(ar1[i])
            i++
        }
    }
    
        while(i<=m-1){
            ar3.push(ar1[i])
            i++
        }
        
    
    
        while(j<=n-1){
            ar3.push(ar2[j])
            j++
        }
        if((m+n)%2!=0){
            let l = (m+n+1)/2
            return ar3[l-1]
        }
        let z = (m+n)/2
        return (ar3[z-1]+ar3[z])/2
    
}
console.log(findmedian(ar1,ar2,m,n))
((ar1,ar2,m,n)=>{
    while(i!=m-1&&j!=n-1){
        if(ar1[i]>=ar2[j]){
            ar3.push(ar2[j])
            j++
        }
        else{
            ar3.push(ar1[i])
            i++
        }
    }
    
        while(i<=m-1){
            ar3.push(ar1[i])
            i++
        }
        
    
    
        while(j<=n-1){
            ar3.push(ar2[j])
            j++
        }
        if((m+n)%2!=0){
            let l = (m+n+1)/2
            return ar3[l-1]
        }
        let z = (m+n)/2
        return (ar3[z-1]+ar3[z])/2
    
})(ar1,ar2,m,n)