require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




//const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async () => {
    //console.log('Hola mundo');
    let opcion = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        //establecer las tareas
        tareas.cargarTareaDesdeArray(tareasDB);
    }

    

    do {
        //esperame hasta que se resuelva mostrarMenu.. porque esa funcion es una promesa.
        opcion = await inquirerMenu();

        switch(opcion){
            case '1':
                const desc = await leerInput('Descripción:');
                // console.log(desc);
                tareas.crearTarea( desc );
                break;
            case '2':
                console.log( tareas.listadoArray );
                break;
        }
        
        guardarDB(tareas.listadoArray);
        
        //hago pausa porque o sino apenas puedo ver la opcion que seleccione xD
        await pausa();
    } while (opcion !== '0');
    
}

main();