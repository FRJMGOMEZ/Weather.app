const {argv} = require('./config/comandosYargs');
const {getCoordenadas} = require ('./APIGOOGLE/City');
const {getWeather} = require('./APIWEATHER/weather');


const getInformacion = async () =>{

try{

let coordenadas = await getCoordenadas(argv.direccion)

let weather = await getWeather(coordenadas.latitud,coordenadas.longitud);

let address = coordenadas.address;

return {weather,
        address}}

catch(error){console.log('Imposible realizar la operacion')}
}


getInformacion()
  .then(data=>{
   let main = data.weather.data.main;
   let address = data.address;
   console.log(`===   ciudad: ${address}`);
   console.log(`===   humedad: ${main.humidity}`)
   console.log(`===   temperatura: ${main.temp}`)
   console.log(`===   tempMax: ${main.temp_max} tempMin: ${main.temp_min}`)})
  .catch(error=>{console.log(error)})
