const Animal = require('./Animal.js');
const _raza = Symbol("raza");
class Gato extends Animal {
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

    maullar() {
        console.log("Soy un gato, soy de la raza "+this.getRaza()+" miau miau!!");
    }
}

module.exports = Gato;