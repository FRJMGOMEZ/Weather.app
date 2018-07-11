const axios = require('axios');


const getWeather = async (latitud,longitud) =>{

try{

let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&APPID=513297d87f696d447d5019a05285498e`)

return respuesta
}

catch(error){console.log('No se ha podido realizar la peticion')}

}






module.exports = {getWeather};
