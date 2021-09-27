//Acá se hace la función para calcular los salarios de la lista 
var salarios = colombia.map(
    function(persona){
        return persona.salary
    }
)
//Aqui se ordenan los salarios
var salariosordenados = salarios.sort(
    function(salarioa, salariob){
        return salarioa-salariob
    }
    )
//Aqui se saca la mediana
function medianasalariosgeneral(lista){
    mitadlista = parseInt(salariosordenados.length/2)
    mediana = salariosordenados[mitadlista]
    if (salariosordenados.length % 2 ===0){
    var suma = (mediana + salariosordenados[mitadlista-1])/2
    return suma 
    } 
    else{
        return mediana
    }
}

var mediageneralcol = (medianasalariosgeneral(salariosordenados))
//Se calcula la mediana de los top 10

//El metodo splice sirve para sacar una parte del array, el primer parametro es donde se inicia a cortar y el segundo es donde termina de cortar y se genera un array nuevo con el nombre de la variable


//Aca se configura el inicio y la cantidad de splices que vamos a hacer 
var splicestart = parseInt((salariosordenados.length*90)/100)
var splicecount = salariosordenados.length - splicestart;

//Se ponen los parametros de la funcion de mediana de top 10 col
var mediatop10col = salariosordenados.splice(splicestart,splicecount)

function medianasalariostop(lista){
    mitadlista = parseInt(lista.length/2)
    mediana = lista[mitadlista]
    if (lista.length % 2 ===0){
    var suma = (mediana + lista[mitadlista-1])/2
    return suma 
    } 
    else{
        return mediana
    }
}


//Se crea la funcion para definir la mediana 
var medianatop10col = (medianasalariosgeneral(mediatop10col))

console.log({
    medianatop10col, mediageneralcol})