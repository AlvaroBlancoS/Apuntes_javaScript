const Microprocesador = require('./Microprocesador.js');
const _tipo = Symbol("tipo");

class Ordenador {
    amd = new Microprocesador("AMD", "Ryzen 5 4500");
    intel = new Microprocesador("INTEL","Celeron kaby Lake G3930");

    constructor(tipo) {
        this[_tipo] = tipo;
        this.amd;
        this.intel;
        this.microprocesador = new Microprocesador("AMD", "Ryzen 5 4500");
    }

    getTipo() {
        return this[_tipo];
    }

    setTipo(agregarTipo) {
        this[_tipo] = agregarTipo;
    }

    usar(){
        //this.microprocesador.encender();
        //this.amd.encender();
        this.intel.encender();
        console.log("Ahora puedo trabajar mi ordenador "+this.getTipo());
    }

}
module.exports = Ordenador;