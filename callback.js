function llamarAlumno(alumno,callback) {
    let llamadaAlumno = `Llamando a alumno: ${alumno}`;
    // ejecutar la funcion callback 
    callback(llamadaAlumno)
}

// Definir callback 
const imprimir = (texto)=>{
    console.log(texto);
}

// Invocar la funcion principal llamarAlumno
llamarAlumno("Juan",imprimir);