let _nombre = Symbol("nombre");
class Animal{
    constructor(nombre){
        this[_nombre]=nombre;
    }
    getNombre(){
        return this[_nombre];
    }
    setNombre(agregarNombre){
        this[_nombre] = agregarNombre;
    }

    saludar(){
        console.log("Hola, soy "+this.getNombre());
    }
}
module.exports = Animal;
