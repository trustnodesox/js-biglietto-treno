var km = Number(prompt("Quanti kilometri vuoi percorrere?"));
console.log(km);

var eta = Number(prompt("Quanti anni hai?"))
console.log(eta);

var costoAlKm = 0.21;
console.log(costoAlKm);

var corsa = km * costoAlKm;
console.log(corsa);

var scontoMinorenni =  (corsa * (20 / 100));
console.log(scontoMinorenni);

var scontoAnziani = (corsa * (40 / 100));
console.log(scontoAnziani);

if (eta < 18) {
  corsa = (corsa - scontoMinorenni)
}
else if (eta > 65) {
  corsa = (corsa - scontoAnziani)
}








document.getElementById('biglietto') .innerHTML = "Il prezzo del tuo biglietto è  " + corsa + "€";
