var attempts = 3;

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "Formget" && password== "formget#123"){
		//alert("Login Successfully");
		window.location = "success.html";
		return false;
	}else{
		attempts--;
		alert("You have left" + attempts + "attempts");
		if (attempts == 0) {
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
		}
	}
}