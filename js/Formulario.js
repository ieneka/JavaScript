const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');

	var inputEmail = document.getElementById('inputEmail');
	
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPassword1 = document.forms["myForm"]["inputPassword1"];
	var inputBreed = document.forms["myForm"]["inputBreed"];
	var inputName = document.forms["myForm"]["inputName"];
	var inputAge = document.forms["myForm"]["inputAge"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "El nombre es obligatorio";
		acumErrores ++;
    }

    if(inputAge.value == "") {
		inputAge.classList.add("is-invalid");
		document.getElementById("errorAge").textContent = "La edad es obligatoria";
		acumErrores ++;
    }

    if(inputBreed.value == "") {
		inputBreed.classList.add("is-invalid");
		document.getElementById("errorBreed").textContent = "Falta la raza";
		acumErrores ++;
	}
    
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}else if (inputPassword.value != inputPassword1.value){
        inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "Las contraseñas no coinciden";
		acumErrores ++;
    }
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta la subscripción";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}