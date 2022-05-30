
let process= require('process');
let listaTarea= require('./funcionesDeTareas');

let argv=process.argv;



switch (argv[2]) {
    case 'listar':
        console.log("listado de tareas ")
        console.log("-----------------")
        listaTarea.listarBonito();
        break;
    case 'crear':
        listaTarea.guardartarea(argv[3]);
        console.log("listado de tareas ")
        console.log("-----------------")
        listaTarea.listarBonito();
        break;
    case 'eliminar':
        listaTarea.eliminar(argv[3]);
        console.log("listado de tareas ")
        console.log("-----------------")
        listaTarea.listarBonito();
        break;
        
    case 'cambiarEstado':// la funcion cambiar recive el indice y ademas un estado al que quieras cambiar
            listaTarea.cambioEstado(argv[3],argv[4]);
            console.log("listado de tareas ")
            console.log("-----------------")
            listaTarea.listarBonito();
        break;
    case 'comandos':
        console.log("listado de comandos ")
        console.log("-----------------")
        console.log("- listar")
        console.log("- agregar ")
        console.log("- eliminar")
        console.log("- comandos ")    
        console.log("- cambiarEstado ")  

        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción. ")
        console.log("-----------------")
        console.log("- listar")
        console.log("- agregar ")
        console.log("- eliminar")
        console.log("- comandos ")
        console.log("- cambiarEstado ")  
        break;
    case 'filtrar':
        let filtro= listaTarea.leerPorEstado(argv[3]);
        filtro.length !==0 ?
        listaTarea.listarBonito(filtro):console.log("no hay tareas con estado "+argv[3])
        break;

    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}