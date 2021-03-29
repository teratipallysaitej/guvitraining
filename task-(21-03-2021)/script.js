var req = new XMLHttpRequest()
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send()
req.onload = function(){
    let data = JSON.parse(this.response)
    for(let i in data){
        try{
            let cname = data[i].name;
            let latlong = data[i].latlng
            if(latlong===0){
                throw new Error("invalid ")
            }
            wd(cname,...latlong)
        }
        catch(e){

        }
    }
}

var wd = (cname,lat,long)=>{
    var key = '1201f2a31d2717d9da9d8db2dece3dc6'
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=1201f2a31d2717d9da9d8db2dece3dc6'
    var weather = new XMLHttpRequest();
    weather.open('GET',url,true);
    weather.send();
    weather.onload = function(){
        try{
            var result = JSON.parse(this.response);
            console.log(cname+":"+result.main.temp)
        }
        catch(e){
            console.log("invalid"+e)
        }
    }
}