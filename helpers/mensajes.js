require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('============================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('=============================\n'.green);

        console.log(`${ '1.'.green} Crear tarea`);
        console.log(`${ '2.'.green} Listar tareas`);
        console.log(`${ '3.'.green} Listar tareas completadas`);
        console.log(`${ '4.'.green} Listar tareas pendientes`);
        console.log(`${ '5.'.green} Completar tarea(s)`);
        console.log(`${ '6.'.green} Borrar tarea`);
        console.log(`0. Salir \n`.yellow);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (opcion) => {
            //console.log( {opcion} );

            readLine.close();
            resolve(opcion);
        })
    });
    
}

const pausa = () => {

    return new Promise(resolve => {
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${ 'ENTER'.yellow } para continuar\n` , (opcion) => {
            //console.log( {opcion} );
    
            readLine.close();
            resolve(opcion);
        })
    
    });
}

module.exports = {
    mostrarMenu,
    pausa
}