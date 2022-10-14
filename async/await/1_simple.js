// 1. Creamos el objeto Request 
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type';


const exito =(response)=>{
    const tipos = JSON.parse(response).results;
    tipos.forEach((tipo) => {
        console.log(`Tipo: ${tipo.name}`);
        console.log(`---------------------`);
    });
}

const fallo = (status) =>{
    console.log(status);
}

const get_data = (endpoint) =>{
    // Definir una promesa para la conexión a la API 
    let promise = new Promise( (resolve , reject)=> {
            //2. Creamos el objeto de conexion
    let http = new XMLHttpRequest()

    //3. Abrimos la conexion a la API 
    http.open('get' , endpoint)

    //4. Enviar la solicitud(Request) 
    http.send()

    //5. Hacer el tratamiento del Response 
    http.onload = ()=>{
        if (http.status === 200) {
                resolve(http.responseText)
        } else {
            reject(http.status)
        }}
    })
    return promise;
}

async function f (){
    try {
        let response = await get_data(endpoint)    
        exito(response);
    } catch (error) {
        fallo(error)
    }
}
f()

// get_data(endpoint)
// .then((response)=>{
//     exito(response);
// })
// .catch((status)=>{
//     fallo(status)
// })
