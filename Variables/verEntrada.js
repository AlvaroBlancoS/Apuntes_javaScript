//Creo que de momento es más recomendable aunque tiene muchas lineas
let nombre;
//console.log("¿Cómo te llamas?");//Esta línea caca
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo te llamas? ', (answer) => {
  nombre = answer;
  rl.close();
  console.log("Hola " + nombre);
});


// Verifica si estamos en el entorno del navegador antes de usar window.prompt
/*
if (typeof window !== 'undefined') {
  nombre = window.prompt("¿Cómo te llamas?");
  console.log("Hola " + nombre);
  
} else {
  // Si no estamos en el entorno del navegador, puedes manejar la entrada de alguna otra manera
  // Aquí puedes usar Node.js readline, por ejemplo.
  console.log("¿Cómo te llamas?");
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', (answer) => {
    nombre = answer;
    rl.close();
    console.log("Hola " + nombre);
  });
}
*/