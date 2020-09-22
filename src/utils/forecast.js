const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=17a13b0d83ef46ab03e3168b24a6a85d&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//      //console.log(response.body.current)
//      console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
//  })

const forecast = (latitude, longitude, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=17a13b0d83ef46ab03e3168b24a6a85d&query=' + latitude.toString() + ',' + longitude.toString() + '&units=f'
//    request({ url: url, json: true}, (error, response) => {
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback ('Unabel to connect to weather service', undefined )
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast