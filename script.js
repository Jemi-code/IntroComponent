let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let myForm = document.forms[0];
let button = document.getElementById("button");
let error = document.getElementsByTagName("img");
let fnError = document.getElementById("fnErr");
let lnError = document.getElementById("lnErr");
let emError = document.getElementById("eErr");
let passError = document.getElementById("pErr");

let validate = (e) => {
    if(firstName.value.length >= 1){
        makeValid(firstName,fnError, "Valid", 0);
    } else {
        makeRed(firstName, fnError, "First Name cannot be empty", 0);
        e.preventDefault();

    }

    if(lastName.value.length >= 1){
        makeValid(lastName,lnError, "Valid", 1);
    } else {
        makeRed(lastName, lnError, "Last Name cannot be empty", 1);
        e.preventDefault();
    }

    if(isEmail(email.value)){
        makeValid(email, emError, "Valid", 2);
    } else {
        makeRed(email, emError, "Looks like this is not an email", 2);
        e.preventDefault();
    }

    if(password.value.length >= 1){
        makeValid(password, passError, "Valid", 3);
    } else {
        makeRed(password, passError, "Password cannot be empty", 3);
        e.preventDefault();
    }
}

function isEmail(ema) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ema);
}

let makeRed = (id, err, message, index) => {
    id.style.outline = "1px solid hsl(0, 100%, 74%)";
    id.style.marginBottom = "0.2rem";
    id.style.color = "hsl(0, 100%, 74%)";
    err.innerHTML = message;
    err.style.color = "hsl(0, 100%, 74%)";
    error[index].setAttribute("src", "images/icon-error.svg");
    error[index].style.display = "block";
}

let makeValid = (id, good, message, index) => {
    id.style.outline = "1px solid lightgray";
    id.style.marginBottom = "0.2rem";
    good.style.color = "lightgreen";
    good.innerHTML = message;
    error[index].setAttribute("src", "images/valid.png");
    error[index].style.display = "block";
    error[index].style.width = "24px";
    error[index].style.height = "24px";
}

let makeDefault = () => {
    firstName.style.outline = "1px solid lightgray";
    lastName.style.outline = "1px solid lightgray";
    email.style.outline = "1px solid lightgray";
    password.style.outline = "1px solid lightgray";

    firstName.style.color = "hsl(249, 10%, 26%)";
    lastName.style.color = "hsl(249, 10%, 26%)";
    email.style.color = "hsl(249, 10%, 26%)";
    password.style.color = "hsl(249, 10%, 26%)";

    firstName.style.marginBottom = "1.5rem";
    lastName.style.marginBottom = "1.5rem";
    email.style.marginBottom = "1.5rem";
    password.style.marginBottom = "1.5rem";

    for(let i = 0; i < error.length; i++){
        error[i].style.display = "none";
    }
}

myForm.addEventListener('submit', validate);

myForm.addEventListener("click", makeDefault);

let body = document.body;

if(window.innerWidth <= "646"){
    body.style.background = "url('images/bg-intro-mobile.png')";
    body.style.backgroundColor = "hsl(0, 100%, 74%)";
}