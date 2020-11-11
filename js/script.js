/* Il programma dovrà chiedere all’utente il
numero di chilometri che vuole
percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà
calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai
km (0.21 € al km), ma va applicato uno
sconto del 20% per i minorenni e del
40% per gli over 65. */

// #1 Chiedere al passeggero il numero di Km da percorrere
var km = parseInt(prompt("Quanti Km vuoi percorrere?"));

if (km <= 0) {
    alert("Visto che puoi sottrarre Km, allora ti rimborsiamo noi!");
}

if (isNaN(km)) {
    alert("Per scrivere Km servo numeri, non lettere!");
}

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

if (age >= 65 && age < 100) {
    ticketPrice = discount40;
}

if (age >= 100) {
    ticketPrice = 0;
}

// #5 Risultato finale
if (ticketPrice > 0) {
    document.getElementById("result").innerHTML = "Il costo del tuo biglietto è: " + ticketPrice + " €";
    console.log("Prezzo del ticket finale: " + ticketPrice);
} else if (isNaN(ticketPrice)) {
    document.getElementById("result").innerHTML = "Hai sbagliato qualche dato, riprova!";
} else if (ticketPrice == 0) {
    document.getElementById("result").innerHTML = "Viaggi Gratis!";
} else {
    document.getElementById("result").innerHTML = "La compagnia è debito con te di: " + ticketPrice + " €";
    console.log("Prezzo del debito: " + ticketPrice);
}
