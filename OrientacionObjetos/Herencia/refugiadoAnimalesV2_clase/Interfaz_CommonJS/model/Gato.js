let Animal = require('./Animal.js');
let {Sonidos}  = require('../data/Interfaz.js');
class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }
    hacerSonido(sonido){
        return sonido;
    }  
}
module.exports = Gato;