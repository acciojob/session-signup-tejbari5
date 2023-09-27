//your JS code here. If required.
const btn=document.getElementById('submit');
const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const Cpassword=document.getElementById('confirm-password');
console.log("here"+ password.value +" "+Cpassword.value);

btn.addEventListener("click",function(){
	if(password.value !== Cpassword.value){
		alert('Passwords do not match');
	}else{
		sessionStorage.setItem('name',name);
		sessionStorage.setItem('email',email);
		sessionStorage.setItem('password',password);

		alert('Sign up successful!');
	}
})