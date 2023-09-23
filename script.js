// //your JS code here. If required.
console.log("nevil")
const button=document.getElementById("submit");


let signup= document.getElementById("signup-form")

signup.addEventListener("submit",function(event)=>{
	event.preventDefault();
	const name=document.getElementById("name").value;
	const email= document.getElementById("email").value;
	const password=document.getElementById("password").value;
	const confirm= document.getElementById("confirm-password").value;
	console.log(name)

	if(password === confirm){
		alert("Sign up successful!");
		sessionstorage.setItem("name", name);
		sessionstorage.setItem("email", email);
		sessionstorage.setItem("password",password);
		
		
	}
	else
	{
		alert("Passwords do not match");
	}
	
});