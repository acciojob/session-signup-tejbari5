//your JS code here. If required.
const pass1 = document.getElementById("password")
const pass2 = document.getElementById("confirm-password")
const name = document.getElementById("name");
const email = document.getElementById("email");
const button = document.getElementById("submit");

button.addEventListener("click",()=>{
	if(pass1.value === pass2.value){
		sessionStorage.setItem("name",name.value)
		sessionStorage.setItem("email",email.value)
		sessionStorage.setItem("password",pass1.value)
		alert("Sign up successful!")
	}
	else{
		alert("Password do not match");
	}

})