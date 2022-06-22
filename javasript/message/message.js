// let username = "per";

// let message = "you have a new notification";

// console.log(message + ", " + username + "!");
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);
let welEl = document.getElementById("wel");
let myName = "oyetola sodiq";
let greeting = "Hi my name is ";
welEl.innerText = greeting + myName;
// welEl.innerText = welEl.innerText + "👋"; same thing with below
welEl.innerText += "👋";
