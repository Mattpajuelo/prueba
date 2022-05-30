let autos=[
    {
        
        marca:"ford",
        modelo:"ford fiesta", 
        precio:150000, 
        km:200, 
        color:"azul", 
        cuotas:12, 
        anio:2019, 
        patente:"APL123", 
        vendido:false,
        
    },
    {
        marca:"toyota",
        modelo:"Corolla ", 
        precio:100000, 
        km:0, 
        color:"Blanco", 
        cuotas:14, 
        anio:2019, 
        patente:"APL123", 
        vendido:false,
        

    }
]
const concesionaria = {
    /* completar */
   autos: autos,
 
   buscarAuto: function (patente){
      auto = autos.find(element=> element.patente===patente);
      auto ==undefined? auto=null:auto;
      return auto
},
venderAuto:function (patente){
    auto = this.buscarAuto(patente)
    auto!==null?auto.vendido=true:auto;
    return auto
 },

 autosParaLaVenta:()=>{
    let faltavender=autos.filter(element=> element.vendido===false)
    return faltavender;
 },
 
 autosNuevos: function(){
    let nuevos= this.autosParaLaVenta()
    nuevos= nuevos.filter(element=> element.km<100)
    return nuevos
 },
}

console.log(concesionaria.autosNuevos())
       