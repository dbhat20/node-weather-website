const request = require('postman-request')

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20An88geles.json?access_token=pk.eyJ1IjoiZGJoYXQyMDIwIiwiYSI6ImNrZXQ5b2ttaTF0cHUyeW1vd2RsM3JmaXYifQ.yXlLRTTt1R3-ROkQgJA0mQ&limit=1'
// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geocode service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find geocode. Try another search')
//     } else {
//     const loc = response.body.features[0].center        
//     console.log('Lattitude: ' + loc[1] + ' and Longitude: '+ loc[0])
//     }
// })
const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGJoYXQyMDIwIiwiYSI6ImNrZXQ5b2ttaTF0cHUyeW1vd2RsM3JmaXYifQ.yXlLRTTt1R3-ROkQgJA0mQ&limit=1'
    //    request({ url: geocodeUrl, json: true}, (error, response) => {
    request({ url: geocodeUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const loc = body.features[0]
            callback(undefined, {
                latitude: loc.center[1],
                longitude: loc.center[0],
                location: loc.place_name
            })
        }
    })
}

module.exports = geocode

