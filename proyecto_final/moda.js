var lista_1 = [1,2,3,4,4,4,5,6,7,7,8,6,5,4,4]

var lista_1count = {}
//el map recorre el array 
lista_1.map(
    function(elemento){
    if(lista_1count[elemento]){
        lista_1count[elemento] +=1 
    }
    else{
        lista_1count[elemento] = 1        
    }
    }
)
//el entries sirve para volver a convertir un objeto en un array, el parametro es lo que se convierte en array
var lista_1array = Object.entries(lista_1count).sort(
    function(valoracumulador, nuevovalor){
        return valoracumulador[1] - nuevovalor[1]
    }
)

var moda = lista_1array[lista_1array.length-1];