let Animal = require('./Animal.js');
let _raza = Symbol("raza");
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this[_raza] = raza;
    }

    getRaza() {
        return this[_raza];
    }
    setRaza(agregarRaza) {
        this[_raza] = agregarRaza;
    }

    ladrar() {
        console.log("Soy un perro, soy de la raza "+this.getRaza()+" guau guau!!");
    }
}

module.exports = Perro;
