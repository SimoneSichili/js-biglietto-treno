// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// #1 Chiedere al passeggero il numero di Km da percorrere
var km = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log("Chilometri che hai scelto: " + km);

// #2 Chiedere al passeggero la sua età
var age = parseInt(prompt("Quanti anni hai?"));
console.log("Età che hai scelto: " + age);

// #3 Calcolare il prezzo del biglietto al Km (0.21€ al Km)
var ticketPrice = Math.floor(km / 0.21);
console.log("Prezzo del ticket in base ai chilometri: " + ticketPrice);

// #4 Calcolare gli sconti del 20% e del 40%
var discount20 = ticketPrice - ((ticketPrice / 100) * 20);
var discount40 = ticketPrice - ((ticketPrice / 100) * 40);

if (age < 18) {
    ticketPrice = discount20;
}

if (age >= 65) {
    ticketPrice = discount40;
}

// #5 Risultato finale
document.getElementById("result").innerHTML = "Il costo del tuo biglietto è: " + ticketPrice + " €";
console.log("Prezzo del ticket finale: " + ticketPrice);

