let Animal = require('./Animal.js');
let {Sonidos} = require('../data/Interfaz.js');
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }
    hacerSonido(sonido){
        return sonido;
    }
}
module.exports = Perro;

