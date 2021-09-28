function areacirculo(radio){
    console.log ("El área del círculo es " + 3.14*(radio*radio)+ " cm");
    var areac = document.getElementById("circuloarea")
    areac.innerText ="El área del círculo es " + 3.14*(radio*radio)+ " cm"
}

function circunferencia(radio){
    console.log ("La circunferencia de el círculo es " + 3.14*radio*2+ " cm")
    var mensajec = document.getElementById("circunferencia")
    mensajec.innerText ="La circunferencia de el círculo es " + 3.14*radio*2+ " cm"
}

function areacirculou(){
    var input = document.getElementById("inputcirculo");
    var value = input.value;
    var area = areacirculo(value)
}

function circunferenciau(){
    var input = document.getElementById("inputcirculo");
    var value = input.value;
    var vcircunferencia = circunferencia(value)
}

