const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];


	var inputFirstName = document.getElementById('inputFirstName');
	var inputLastName = document.getElementById('inputLastName');
	var inputEmail = document.getElementById('inputEmail');
	var inputPassword = document.forms["myForm"]["inputPassword"];
	var inputSoSecNum = document.forms["myForm"]["inputSoSecNum"];
	var inputCountry = document.forms["myForm"]["inputCountry"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZipCode = document.forms["myForm"]["inputZipCode"];
	var gridCheck = document.forms["myForm"]["gridCheck"];
	
	// FistName Validation
	if(inputFirstName.value == "") {
		inputFirstName.classList.add("is-invalid");
		document.getElementById("errorFirstName").textContent = "Complete this camp, please";
        acumErrores ++;
    }
	// LastName Validation
	if(inputLastName.value == "") {
		inputLastName.classList.add("is-invalid");
		document.getElementById("errorLastName").textContent = "Complete this camp, please";
        acumErrores ++;
    }
	//E-mail Validation amb RegEx
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Complete this camp, please";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This e-mail does not comply with the format";
		acumErrores ++;
	}
	// Validació de la contrasenya amb RegEx
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Complete this camp of password, please";
		acumErrores ++;
	}else if(!validar_password(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This password does not comply with the format";
		acumErrores ++;
	}
	//Validació del Número de SS 
    if(inputSoSecNum.value == "") {
		inputSoSecNum.classList.add("is-invalid");
		document.getElementById("errorSoSecNum").textContent = "Complete this camp of social security number, please";
		acumErrores ++;
	}
	//Pais
    if(inputCountry.value == "") {
		inputCountry.classList.add("is-invalid");
		document.getElementById("errorCountry").textContent = "Complete this camp of country, please";
		acumErrores ++;
	}
	//Ciutat Validació
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Complete this camp of city, please";
		acumErrores ++;
	}
	//CP
	if(inputZipCode.value == "" || inputZipCode.length<5) {
		inputZipCode.classList.add("is-invalid");
		document.getElementById("errorZipCode").textContent = "This zip code does not comply with the format";
		acumErrores ++;
	}
	//Acceptació 
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Accept this Terms and Conditions, please";
		acumErrores ++;
	}
	
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
};



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

//Validació e-mail
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Creo la funció per validar la contrasenya Nivell 2
function validar_password(password) {
	var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	return regex.test(password) ? true : false;
}
