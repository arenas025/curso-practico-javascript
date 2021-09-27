var lista1 = [
    100,
    200,
    300,
    500
];

//var Sumalista1 = 0;
//for (var i = 0; i < lista1.length ; i++ ){
//    Sumalista1 = Sumalista1 + lista1[i]




function Calcularpromedio (lista){
var Sumalista = 0;
for (var i = 0; i < lista.length ; i++ ){
Sumalista = Sumalista + lista[i];
}
var Promedio = Sumalista/lista.length
console.log("El promedio de tus numeros es " + Promedio)
}





//Para el promedio tambien se puede usar el metodo reduce