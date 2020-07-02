//EXERCICI 1
//console.log("Hola Mundo");

//EXERCICI 2
//alert("¡Me llamo Iñaki!");

//EXERCICI 3
/* var nombre="Iñaki";
var apellido="Martinez";

console.log(nombre +" " + apellido); */

//EXERCICI 4
/* var nom1="30";
var nom2="16";

console.log("La suma entre " + (nom1)  +" y " + (nom2) + " es " + (parseInt(nom1)+ parseInt(nom2))); */

 //EXERCICI 5
/*var nota=prompt("Introduce tu nota.");
var examen="5";

if(nota>=examen){
    alert("Enhorabuena! Has aprobado con un " + nota);
}
else {
    alert("Lo siento. Has suspendido con un " + nota);
} */

//EXERCICI 6
/* var frase1="Tinc un cotxe de color";
var color_azul=" blau";
var color_verd=" verd";

console.log(frase1 + color_verd);
console.log(frase1.replace(/o/g,"u") + color_azul); */

 //EXERCICI 7
/*var cosas=["taula","cadira","ordinador","llibreta"];

var contador=0;

while (contador<cosas.length){
    console.log("L'objecte " + cosas[contador] + " està a la posició " + cosas.indexOf(cosas[contador]));
    contador++;
} */

//EXERCICI 8
/*var valor1=prompt("Introduce el primer numero");
var valor2=prompt("Introduce el segundo numero");

if(!isNaN(valor1) && !isNaN(valor2)){

    var operador=prompt("Que operacion quieres hacer? suma/resta/multiplicación");

    if (operador=="suma"){
        alert(parseInt(valor1)+parseInt(valor2));
    }
    else if (operador=="resta"){
        alert(parseInt(valor1)-parseInt(valor2));
    }
    else if (operador=="multiplicacion" || operador=="multiplicación"){
        alert(parseInt(valor1)*parseInt(valor2));
    }
    else{
        alert("No es posible esa operacion");
    }

}
else{
    if(typeof(valor1)=="string" || typeof(valor2)=="string"){
    alert("No has introducido valores numericos");
    }
    else("Ha ocurrido un error no identificado");
} */
