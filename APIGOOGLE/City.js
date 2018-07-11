const axios = require('axios');



const getCoordenadas = async (direccion) =>{

try{

let encodedUrl = encodeURI(direccion);

let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAlQwYyoxIBJxeZU0_uMehXPHrV_hRYhpg`)

let latitud = await response.data.results[0].geometry.location.lat;

let longitud = await response.data.results[0].geometry.location.lng;

let address = await response.data.results[0].formatted_address;

return {latitud,
        longitud,
        address}
}

catch(error){console.log(`No se pudo realizar la peticion`)}

}


module.exports = {getCoordenadas};
