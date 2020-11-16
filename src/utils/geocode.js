const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoidGVybmFrIiwiYSI6ImNrZ21jdjNhYzA1NXMyc3BwdmhicjRja3QifQ.XwdWW2R9K8Q4ES1hThmA5Q'

    request({ url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to conect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode