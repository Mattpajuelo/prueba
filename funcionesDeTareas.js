let tareas= require('./tareas.json');
const fs= require('fs');
let escribirJSON= (dato)=>fs.writeFileSync('./tareas.json',JSON.stringify(dato,null,4),'utf-8')
module.exports={
    lista: tareas,
    listarBonito:(tar=tareas)=>tar.forEach((tarea,i) => {
        
        console.log(`${i+1}-   ${tarea.titulo} - ${tarea.estado}`)
        
    })
    /*()=> {for (let i = 0; i < tareas.length; i++) {
        console.log(`${i+1}-   ${tareas[i].titulo} - ${tareas[i].estado}`)
        
    }}*/,
    guardartarea:(titulo,estado="pendiente")=>{
        let tarea={
            titulo,
            estado
        }
        tareas.push(tarea);
        escribirJSON(tareas);
        return tareas;

    },
    eliminar:(num1)=>{
       
        tareas.splice(num1-1,1)
        escribirJSON(tareas);
        return tareas;

    },
    cambioEstado:(num1,estado)=>{
        
        tareas[num1-1].estado= estado;
        escribirJSON(tareas);
        return tareas;

    },
    leerPorEstado:(estado)=>{
        let filtro =tareas.filter(element => {
            if(element.estado===estado)
            {return element}
        }
            )
        return filtro;
    },
    
        

    
}
    

