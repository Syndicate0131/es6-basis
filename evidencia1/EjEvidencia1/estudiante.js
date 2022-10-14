let colors = require('colors');

const g1 = ["Laura",
            "Carlos",
            "Ana",
            ]

const g2 = ["Enrique",
            "Jairo",
            "Valeria",
            ]

const g3 = [...g1,
            "Diana",
            ...g2,
            "Duvan"
            ]
        
const estudiante ={
    id: '1',
    nombre: 'Juan',
    apellido : 'Quitian',
    identificacion: '1011081482',
    amigos: g3
}

console.log(estudiante);

/*            
//Desectructurar al objeto estudiantes
let [L,C,A]= g1

console.log(L,C,A);

//Desectructurar al objeto estudiante
let {id ,nombre , apellido , identificacion, amigos} = estudiante




console.log(id.bgYellow);
console.log(nombre.bgBlue);
console.log(apellido.bgGreen);
console.log(identificacion.bgMagenta);
*/