import Animal from "./Animal.mjs";
export default class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }
    toString() {
        return "Hola, soy " + this.getNombre() + " y mi raza es " + this.getRaza() /*+ " " + super.hacerSonido("Gua gua");*/
    }
}
