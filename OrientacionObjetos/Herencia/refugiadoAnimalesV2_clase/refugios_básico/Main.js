const Perro = require('./Perro.js');
const miPerro = new Perro("Firulais","Yorkshire");

miPerro.saludar();
miPerro.ladrar();

console.log("----------------------------------");

const Gato = require('./Gato.js');
const miGato = new Gato("Gato con botas","Maine Coon");

miGato.saludar();
miGato.maullar();