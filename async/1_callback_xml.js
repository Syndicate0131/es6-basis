let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type';

function exito(response) {
    console.log(JSON.parse(response));
}

function fallo(status) {
    console.log(status);
}

function get_data(endpoint, exito , fallo) {
    //2. Creamos el objeto de conexion
    let http = new XMLHttpRequest()

    //3. Abrimos la conexion a la API 
    http.open('get' , endpoint)

    //4. Enviar la solicitud(Request) 
    http.send()

    //5. Hacer el tratamiento del Response 
    http.onload = function(){
    if (http.status === 200) {
            exito(http.responseText)
    } else {
        fallo(http.status)
    }
}
}

// Invocamos la Funcion de get_data 
get_data(endpoint, exito , fallo)
