/*
4.Program care simuleaza functionarea unui translator stiva nedeterminist
cu lambda-tranzitii. Programul citeste (dintr-un fisier sau de la consola)
elementele unui translator stiva nedeterminist cu lambda-tranzitii oarecare
(starile, starea initiala, starile finale, alfabetul de intrare, alfabetul
de iesire, alfabetul stivei, simbolul initial al stivei, tranzitiile).
Programul permite citirea unui nr oarecare de siruri peste alfabetul de
intrare al translatorului. Pentru fiecare astfel de sir se afiseaza toate
iesirile (siruri peste alfabetul de iesire) corespunzatoare (Atentie! pot
exista 0, 1 sau mai multe iesiri pt acelasi sir de intrare).
*/


`use strict`

var Input = require('./input.js');
var Translator = require('./translator.js');

var translatorData = Input.translatorData();
Translator.loadData(translatorData);
console.log("Translator stiva finit, nedeterminist cu lambda-tranzitii:");
console.log(translatorData);

console.log("Input:");
console.log(Input.translatorInput());

var outputs = Translator.run(Input.translatorInput());

console.log("Output:");
console.log(outputs);