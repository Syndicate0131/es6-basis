const needle = require("needle");

let endpoint = 'https://pokeapi.co/api/v2/type';

needle('get', endpoint)
.then((response)=>{
    console.log(response);
         response.body.results.forEach((tipo) => {
             console.log(`Tipo: ${tipo.name}`);
             console.log(`---------------------`);
 }); 
})
.catch((status)=>{
    console.log(status.body);
})

