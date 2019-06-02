const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/12b832ce06bb5407b659cf51b8e6fa01/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect to weather services', undefined)
        } else if(body.error){
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
            body.currently.temperature + ' degrees out. There is a ' 
                + body.currently.precipProbability +  '% chance of rain.')            
        }
    })
}

module.exports =  forecast
