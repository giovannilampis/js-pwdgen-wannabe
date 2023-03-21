// ask the user what his / her name is

const nameUser = prompt("Qual è il tuo nome ?");

// ask the user what his / her surname is

const surnameUser = prompt("Qual è invece il tuo cognome ?");

// ask the user what his / her favorite color is

const favoriteColor = prompt("Qual è il tuo colore preferito ?");

// write on the web page : nomecognomecolorepreferito21

let password = `${nameUser}${surnameUser}${favoriteColor}21`;

console.log(password);

// show the resulting password on the web page

document.getElementById("pwdgen").innerHTML = `${nameUser}${surnameUser}${favoriteColor}21`;


