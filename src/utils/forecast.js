const request = require('request')

const forcaste = (long,lati,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=ec51f6693da6d36af9b24fe2e3db7471&query='+long+','+lati+'&units=f'

    request({url,json:true},(error,{body} = {})=>{
        if(error){
                  callback('unable to connect to weathr servoce',undefined);
                }else if(body.error){
                    callback('unable to find location',undefined);
                }else{
                callback(undefined,body.current.weather_descriptions+'. It is currently '+body.current.temperature+' and eel like '+body.current.feelslike);
                }
    });
}
module.exports = forcaste