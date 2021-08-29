let autos = require('./arrayDeAutos');

const concesionaria = 
{
    autos: autos,

   buscarAuto : function(patente) 
   {
       
        for (let i= 0; i<autos.length; i++)
        {
            if (autos[i].patente == patente)
            {
                return autos[i]
            } 
         }
    } ,

   venderAuto : function venderAuto (patente) 
        
    {
        let auto = this.buscarAuto(patente)
        if ( auto != null) 
        {
         return auto.vendido = true
         }
    },
     
   autosParaLaVenta: function () 
      {
      let autosNoVendidos = autos.filter( auto => auto.vendido == false)
      return autosNoVendidos 
      },

   autosNuevos: function autosNuevos() 
      {
      let autosParaLaVenta = this.autosParaLaVenta()
      let autosParaVender = autosParaLaVenta.filter(auto => (auto.km < 100)) 
      return autosParaVender
      },
      listaDeVentas: function listaDeVentas () 
         {
         let listaVentas = [0]
         for (let i= 0; i<autos.length; i++) 
         {
            if (autos[i].vendido == true ) 
            {listaVentas.push( autos[i].precio)
            }
         } return listaVentas
         
         },
         totalDeVentas: function totalDeVentas () 
            {
         let listaDePrecios = this.listaDeVentas()
let precios = listaDePrecios.reduce((acumulador,precio) => ( precio + acumulador) )

      return precios
             },
             puedeComprar: function puedeComprar (auto,persona) 
             {
                let capacidadDePagoTotal = persona.capacidadDePagoTotal 
                let capacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas 
                let precioAuto = auto.precio
                let valorDeCuotas = precioAuto / auto.cuotas
                
                if ((precioAuto <= capacidadDePagoTotal) && (valorDeCuotas <=capacidadDePagoEnCuotas)) { return true } else {return false}
                },

autosQuePuedeComprar : function autosQuePuedeComprar (persona) 
   {
let autosParaLaVenta = this.autosParaLaVenta()  
  
 let arrayAutosQuePuedeComprar = [] 
 
   for (let i= 0; i<autosParaLaVenta.length; i++) 
   {
    if (this.puedeComprar (autosParaLaVenta[i], persona) == true) 
      { arrayAutosQuePuedeComprar.push (autosParaLaVenta[i])}
   } return arrayAutosQuePuedeComprar
   
   } 
} 
console.log (autos)
console.log ("holae")
console.log ("Git")
