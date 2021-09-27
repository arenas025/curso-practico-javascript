//var lista1 =[

//] 

//var Mitadlista1 = parseInt(lista1.length/2)

//var mediana = lista1[Mitadlista1]

//function mediana1 (Mitadlista1){
//    if (Mitadlista1%2===0){
 //       return false
  //  }
   // else{
    //    mediana = lista1[Mitadlista1]
     //   return mediana

   // }
//}

function mediana2(lista){
    orden = lista.sort();
    mitadlista = parseInt(orden.length/2)
    mediana = orden[mitadlista]
    if (orden.length % 2 ===0){
    var suma = (mediana + orden[mitadlista-1])/2
    return suma 
    } 
    else{
        return mediana
    }
}