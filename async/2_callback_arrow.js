let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type';

const exito =(response)=>{
    const tipos = JSON.parse(response).results;
    tipos.forEach((tipo) => {
        console.log(`Tipo: ${tipo.name}`);
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
