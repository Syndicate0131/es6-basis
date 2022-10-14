const axios = require('axios');



let config = {
    method:'get',
    url: 'https://ghibliapi.herokuapp.com/films'
}

const f = async() =>{
try {
    let response = await axios(config)
    response.data.forEach((movie) => {
        console.log(`Pelicula: ${movie.title}`);
        console.log(`********************`);
}); 
} catch (error) {
    console.error(error);
}
}
f()

