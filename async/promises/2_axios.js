const axios = require('axios');



let config = {
    method:'get',
    url: 'https://pokeapi.co/api/v2/type'
}

axios(config)
.then((response)=>{
    return response.data.results
//         response.data.results.forEach((tipo) => {
//             console.log(`Tipo: ${tipo.name}`);
//             console.log(`---------------------`);
// }); 
})
.then((data)=>{
    data.forEach((tipo) => {
        console.log(`Tipo: ${tipo.name}`);
        console.log(`---------------------`);
    });
})
.catch((status)=>{
    console.log(status.data);
})
