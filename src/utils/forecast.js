const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7535a6ae7de34e2bbec4d0d229d048b4&query='+
    latitude + ',' + longitude + '&units='

    request({ url, json: true}, (error, { body }) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined,
            body.current.weather_descriptions[0] +
                '. It is currently ' + body.current.temperature +
                ' and real feeling of ' + 
            body.current.feelslike
            )
        }
    })
}

module.exports = forecast