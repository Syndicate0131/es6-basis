let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character';

const exito =(response)=>{
    const personajes = JSON.parse(response).results;
    personajes.forEach((personaje) => {
        console.log(`Nombre Personaje: ${personaje.name}`);
        console.log(`---------------------`);
    });
    // console.log(JSON.parse(response).results);
}

const fallo = (status) =>{
    console.log(status);
}

const get_data = (endpoint, exito , fallo) =>{
    //2. Creamos el objeto de conexion
    let http = new XMLHttpRequest()

    //3. Abrimos la conexion a la API 
    http.open('get' , endpoint)

    //4. Enviar la solicitud(Request) 
    http.send()

    //5. Hacer el tratamiento del Response 
    http.onload = ()=>{
    if (http.status === 200) {
            exito(http.responseText)
    } else {
        fallo(http.status)
    }
}
}

// Invocamos la Funcion de get_data 
get_data(endpoint, exito , fallo)
