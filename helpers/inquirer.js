require('colors');

const inquirer = require('inquirer');


const menuOpciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('=============================\n'.green);

    //desestructurar
    const { opcion } = await inquirer.prompt(menuOpciones);

    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    //va esperar a que presiones ENTER para continuar
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( mensaje ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate( value ){
                if ( value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}