// GET DOCUMENT ELEMENTS
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const checkRememberMe = document.getElementById("rememberMe");
const btnLogin = document.getElementById("btnLogin");

// ADD EVENT LISTENER
checkRememberMe.addEventListener("change", rememberLoginData);
btnLogin.addEventListener("click", login);

// LOGIN FUNCTION
function login() {
	// GET USER INPUT
	const username = inputUsername.value;
	const password = inputPassword.value;

	// VALIDATE USER INPUT
	if (username == "" || password == "") alert("Please fill in all fields");
	else if (username != "supervisao" && password != "#SuperVisao")
		alert("Username and Password are incorrect");
	else if (username != "supervisao") alert("Username is incorrect");
	else if (password != "#SuperVisao") alert("Password is incorrect");
	else window.location.href = "index.htm";
}

// REMEMBER LOGIN DATA
function rememberLoginData() {
	if (checkRememberMe.checked) {
		localStorage.setItem("username", inputUsername.value);
		localStorage.setItem("password", inputPassword.value);
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
}
