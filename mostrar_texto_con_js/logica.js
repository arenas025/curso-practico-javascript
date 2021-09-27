function alturatriangulo(base,lado){
    base1 = base/2
    console.log("La altura del tríangulo es " + Math.sqrt((base1 * base1) + (lado * lado)))
    var mensaje = document.getElementById("Altura_triangulo")
mensaje.innerText = "La altura del tríangulo es " + Math.sqrt((base1 * base1) + (lado * lado))
}

function alturatriangulou(){
        var lado_1 = document.getElementById("inputlado");
        var lado_value = lado_1.value;
        var base_1 = document.getElementById("inputbase");
        var base_value = base_1.value
        var altura = alturatriangulo(base_value,lado_value)
    }

var mensaje = document.getElementById("Altura_triangulo")
mensaje.innerText = "La altura del tríangulo es " + Math.sqrt((base1 * base1) + (lado * lado))