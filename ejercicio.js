var nombre = prompt("Bienvenido al cuestionario de la primavera. \n Escribe tu nombre: ");
var res1 = prompt("¿Cómo se llama al primer día de la Primavera? \n A: Primer Día de la Primavera \n B: Equinoccio de Primavera \n C: Equinoccio de Invierno")
if(res1 == "B"){
    res1 = 25; 
} else if (res1=="A"){
    res1 = 0;
} else if (res1=="C") {
    res1 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera? \n A: 6 meses de luz diurna ininterrumpida \n B: 6 meses de oscuridad inimterrumpida \n C: 6 meses de alternancia de luz y oscuridad")
if(res2 == "A"){
    res2 = 25; 
} else if (res2=="B"){
    res1 = 0;
} else if (res2=="C") {
    res2 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte? \n A: Setiembre \n B: Junio \nC. Marzo")
if(res3 == "C"){
    res3 = 25; 
} else if (res3=="A"){
    res3 = 0;
} else if (res3=="B") {
    res3 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res4 = prompt("¿Qué es la Fiesta de la Primavera en China? \n A: La Navidad \n B: El Año Nuevo \n C. Fiestas Patrias de China")
if(res4 == "B"){
    res4 = 25; 
} else if (res4=="A"){
    res1 = 0;
} else if (res4=="C") {
    res4 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var total = res1 + res2 + res3 + res4

document.write(nombre+"Conseguiste un puntaje de: "+total)