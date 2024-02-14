let _nombre = Symbol("nombre");
let _raza = Symbol("raza");
class Animal{
    constructor(nombre, raza){
        this[_nombre]=nombre;
        this[_raza]=raza;
    }
    getNombre(){
        return this[_nombre];
    }
    setNombre(agregarNombre){
        this[_nombre] = agregarNombre;
    }

    getRaza(){
        return this[_raza];
    }

    setRaza(agregarRaza){
        this[_raza] = agregarRaza;
    }

    saludar(){
        return "Hola, soy "+this.getNombre()+" y mi raza es "+this.getRaza();
    }
}
export default Animal;
