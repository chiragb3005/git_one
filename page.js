console ("login page successfully loaded");
// This is the login page for the application. It will be used to authenticate users and allow them to access the application. 
// The login page will have a form that will ask for the user's email and password. 
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Here you can add your authentication logic, such as sending a request to your server to verify the user's credentials.
    console.log("Email:", email);
    console.log("Password:", password);
}
// Add event listener to the login form
document.getElementById("loginForm").addEventListener("submit", handleLogin);
// This is a simple login page. You can customize it as per your requirements. You can also add error handling and validation to the form.
