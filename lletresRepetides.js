//FASE 1
/* var nombre=["I","Ñ","A","K","I"];

var contador=0;

while (contador<nombre.length){
    console.log(nombre[contador]);
    contador++;
}; */

//FASE 2
/* var nombre=["I","Ñ","A","K","I"];
var vocal=["A","E","I","O","U"];
for (let letra in nombre) {
    if(vocal.includes(nombre[letra])){
    console.log("He trobat la VOCAL: " + nombre[letra]);
    }
    else{
    console.log("He trobat la CONSONANT: " + nombre[letra]);
    }
}; */
//FASE 3
 

 var letras = new Map()
 var nombre=["I","Ñ","A","K","I"];

 nombre.forEach(letra => { 
    value = 1;
    if(letras.has(letra) === true){
       var repetido = letras.get(letra);
       var total = value + repetido;
       letras.set(letra,total);
    }
    else{
        letras.set(letra,value)
    }
    
 })
 console.log(letras);
 


//FASE 4
/*const nombre=["I","Ñ","A","K","I"];
const apellido=["M","A","R","T","I","N","E","Z"]

nombre.push(" ");
const FullName=[].concat(nombre,apellido);
console.log(FullName);*/
