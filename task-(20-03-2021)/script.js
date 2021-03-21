var req = new XMLHttpRequest()
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send()
req.onload = function(){
    let data = JSON.parse(this.response)
    for(let i=0;i<data.length;i++){
        console.log(data[i].name)
    }
}
//https://restcountries.eu/rest/v2/all