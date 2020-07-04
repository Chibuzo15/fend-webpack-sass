// Personal API Key for OpenWeatherMap API
const api_key = '1a4f5e77fbe903c16a81539d113c0cec'
//values for api
const countryCode = 'us';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
//Append to api call to get temperature in Farenheit
const Fahren = 'units=imperial'

const zipCode = 94040;

const get_weather = async function () {
    const response = await fetch(`${baseUrl}?zip=${zipCode},${countryCode}&appid=${api_key}&${Fahren}`, {
        method: 'GET'
    })
    alert('getting weather')
    let data = await response.json()
    return data;
}

export default get_weather;