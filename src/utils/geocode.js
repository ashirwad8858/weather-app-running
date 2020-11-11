const request = require('request')

const geolocation = (address,callback) =>{
    const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXNoaXJ3YWRzaGFybWExMjc5NSIsImEiOiJja2hicm5tamkwN2RuMnhuZzhiemFvOXUyIn0._0AfyLZIaEvnRjZjcecdxQ';

    request({url:geourl,json:true},(error,{body}={})=>{
        if(error){
            callback('Connectivity problem',undefined)
        }else if(body.features.length === 0){
            callback('worng location',undefined)
        }else{
            callback(undefined,{
                long: body.features[0].center[0],
                lati: body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
    });
}

module.exports =  geolocation
