/*
let numero = parseInt(9);
for (let i = 1; i <=10; i++) {
    console.log(numero +" x "+i+"= "+(numero*i));
}
*/
/*
for(;;){
    numero++;
}
*/

let vehiculos = ['coches','motos','camiones','furgonetas','autobuses','avionetas','helicopteros','aviones'];

console.log("-Usando un bucle for loop-");
for (let i = 0; i < vehiculos.length; i++) {
    console.log(vehiculos[i]);
    
}
console.log("--------------------------");
/*
for...of es silmilar que foreach en otros lenguajes de programación. Ambas se utilizan para iterar
sobre elementos de un iterable, como un array o un objeto iterable.
*/
console.log("- Usando un bucle foreach nueva version-");
vehiculos.forEach(valor => {
    console.log(valor);
});
console.log("-------------------------");
console.log("- Usando un bucle for...of -");
for (const valor of vehiculos) {
    console.log(valor);
}
console.log("-------------------------");
