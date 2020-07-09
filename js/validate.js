/* function buscando(){
    var mensajeError = [];
    if(busqueda.value == ""){
        mensajeError.push("Este campo es obligatorio");
    }
    else if (busqueda.value.length < 3){
        mensajeError.push("La longitud minima es de 3 caracteres");
    }
    else{
        alert("Buscando..");
    }
    error.innerHTML = mensajeError.join(', ');
    return false;
}
var busqueda = document.getElementById("buscador");
var error = document.getElementById("error");
 */

var expresion = /\w+@\w+\.+[a-z]/;

function login(){
	
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var errorForm = document.getElementById("errorForm");

    var mensajeError = [];
    if(email.value == "" || password.value == ""){
        mensajeError.push("Todos los campos son obligatorios");
    }
    else if(!expresion.test(email.value)){
        mensajeError.push("El correo no es valido");
        
    }
    else if (password.value.length < 6){
        mensajeError.push("La contraseña debe tener al menos 6 caracteres");
    }
    else{
        alert("Logeando..");
    }
    errorForm.innerHTML = mensajeError.join(', ');
    return false; 

}
