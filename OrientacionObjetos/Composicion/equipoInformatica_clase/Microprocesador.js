const _marca = Symbol("marca");
const _modelo = Symbol("modelo");
class Microprocesador{
    constructor(marca, modelo){
        this[_marca] = marca;
        this[_modelo]= modelo;
    }

    getMarca(){
        return this[_marca];
    }

    setMarca(agregarMarca){
        this[_marca]= agregarMarca;
    }

    getModelo(){
        return this[_modelo];
    }

    setModelo(agregarModelo){
        this[_modelo] = agregarModelo;
    }

    encender(){
        console.log("El microprocesador "+this.getMarca()+" "+this.getModelo()+" se ha puesto en marcha");
    }
}

module.exports = Microprocesador;