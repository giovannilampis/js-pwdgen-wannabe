// ask the user what his / her name is and make a variable out of it

const nameUser = prompt("Qual è il tuo nome ?");

// ask the user what his / her surname is and make a variable out of it

const surnameUser = prompt("Qual è invece il tuo cognome ?");

// ask the user what his / her favorite color is and make a variable out of it

const favoriteColor = prompt("Qual è il tuo colore preferito ?");

// password variable

let password = `${nameUser}${surnameUser}${favoriteColor}21`;

console.log(password);

// show the resulting password on the web page

document.getElementById("pwdgen").innerHTML = `${nameUser}${surnameUser}${favoriteColor}21`;


