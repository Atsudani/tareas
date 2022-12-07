/** 
 *  _listado:
 *      {   'uuid-123123-123123-2': {id:12, desc:asdfasdf, completadoEN:92231}}
*/

const Tarea = require("./tarea");

 

class Tareas{
    //en realidad en el constructor es donde se definen las propiedades en JavaScript.
    //aqui se pone para que sea mas claro de entender.. xD
    _listado = {};

    constructor(){
        this._listado = {};
    }

    get listadoArray(){
        const listado = [];
        //esto me regresa un array de todas las llaves de _listado
        Object.keys(this._listado).forEach( jeje => {
            const tarea = this._listado[jeje];
            listado.push( tarea );
        });

        return listado;
    }


    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareaDesdeArray( tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }
}

module.exports = Tareas;