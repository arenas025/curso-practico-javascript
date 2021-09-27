function perimetrocuadrado(lado){
    console.log ("El perimetro de tu cuadrado es " + lado*4+ " cm")
    alert('El perimetro de tu cuadrado es ' + lado*4+ ' cm')
    }

function areacuadrado(lado){
    console.log ("El area de tu cuadrado es " + lado*lado+ " cm")
    alert('El area de tu cuadrado es ' + lado*lado + ' cm')
    }

function perimetrocuadradou(){
    var input = document.getElementById("inputcuadrado");
    var value = input.value;
    var perimetro = perimetrocuadrado(value)
}

function areacuadradou(){
    var input = document.getElementById("inputcuadrado");
    var value = input.value;
    var area = areacuadrado(value)
}



//console.group("Cuadrado")

//function ladocuadrado(lado_cuadrado){
//return console.log("El lado del cuadrado es de "+ lado_cuadrado)
//}

//function perimetrocuadrado(lado){
//    return console.log("El perímetro del cuadrado es de " + (lado*4)+ " cm")
//    }

//var perimetrocuadrado = ladocuadrado * 4

//function areacuadrado(lado){
//    return console.log("El área del cuadrado es de " + (lado*lado)+ " cm^2")
  //  }

//console.log("El perimetro del cuadrado es de "+perimetrocuadrado+" cm")
//var areacuadrado = ladocuadrado * ladocuadrado
//console.log("El area del cuadrado es de "+areacuadrado+" cm^2")
console.groupEnd

console.group("Triángulo")

function areatriangulo(base,altura){
    return console.log("El área del tríangulo es de " + ((base*altura)/2)+" cm")
    }

function perimetrotriangulo(lado1,lado2,lado3){
    return console.log("El perímetro del tríangulo es de " + (lado1+lado2+lado3)+" cm")
    }
console.groupEnd

function areacirculo (radio){
    return console.log("El área del círculo es de " + (Math.PI * (radio*radio))+" cm")
}

function circunferenciacirculo(radio){
    return console.log("La circunferencia del círculo es de " + (Math.PI * (radio*2))+" cm")
}

//console.group("Triángulo")
//var ladotriangulo1 = 6
//var ladotriangulo2 = 5
//var basetriangulo = 7
//var alturatriangulo= 5.5
//console.log("Los lados del triangulo son "+ ladotriangulo1+ " cm, " + ladotriangulo2 + " cm, su base es de "+ basetriangulo+ " cm y su altura es de " + alturatriangulo+" cm" )
//var perimetrotriangulo = ladotriangulo1+ladotriangulo2+basetriangulo
//console.log("El perimetro del triangulo es de "+perimetrotriangulo+" cm")
//var areatriangulo = (basetriangulo*alturatriangulo)/2
//console.log("El area del triángulo es de "+areatriangulo+" cm^2")
//console.groupEnd

//console.group("Círculos")
//var radiocirculo = 4
//console.log("El radio del circulo es de "+ radiocirculo+ " cm")
//var diametrocirculo = radiocirculo*2
//console.log("El diametro del círculo es de "+ diametrocirculo+ " cm")
//var perimetrocirculo = diametrocirculo * Math .PI
//console.log("El perimetro del círculo es de "+perimetrocirculo+" cm")
//var areacirculo = Math .PI * (radiocirculo*radiocirculo)
//console.log("El area del círculo es de "+ areacirculo+" cm^2")
//console.groupEnd




