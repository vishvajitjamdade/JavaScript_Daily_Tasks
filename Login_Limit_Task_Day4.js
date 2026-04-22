// //Login
// username & password

// max attempts limit = 3

// Account block

let username = "user";
let password = "user@123";
let count = 0;

function checkLogin() {
    let inpUsername = document.getElementById("username").value;
    let inpPassword = document.getElementById("password").value;
    if (username === inpUsername && password === inpPassword) {
        if (count == 3) {
            window.alert("Your Account is blocked! You can't LogIn");
        } else {
            window.alert("You logged In successfully!");
            count = 0;
        }

    } else {
        count++;
        if (count == 3) {
            window.alert("your account is blocked");
        }
    }
}