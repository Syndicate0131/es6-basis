import { materias } from "./materias.js";
import pkg from 'colors'

// Metodos de los objetos arreglos

// // Foreach
// materias.forEach(materia=> {
//     console.log(`Id: ${materia.id}`.bgBlue);
//     console.log(`Materia: ${materia.nombre}`.bgYellow);
//     console.log(`Instructor: ${materia.instructor}`.bgGreen);
//     console.log(`Tipo: ${materia.tipo}`.bgMagenta);
//     console.log(`Notas: ${materia.notas}`.bgRed);
// });

// // Map: Construye un arreglo en base en otro 
// const profesores = materias.map(materia=>{
//     return materia.instructor
// })
// console.log(...profesores);


// // Find-Filter: Encontrar la primera ocurrencia (Elemento)
// const PHP = materias.filter(materia=>{
//     return materia.instructor === "Cristian Buitrago"
// });
// console.log(PHP);

// // Push: Agrega un elemento a un arreglo
// materias.push({
//         id:4,
//         nombre: "Diseño Front-End",
//         instructor: "Adriana Duarte",
//         tipo: "Técnica",
//         notas:[
//             4.4,
//             4.4,
//             4.2
//         ]
// })
// console.log(materias);

//Splice: Elimina un elemento de un arreglo
materias.splice(1,1);
console.log(materias);

// //findIndex: Actualizar
// const nombre = (materia)=>{
//     if (materia.id == 1) {
//         materia.instructor = "Juan";
//     }
// };

// materias.findIndex(nombre);

// console.log(materias);