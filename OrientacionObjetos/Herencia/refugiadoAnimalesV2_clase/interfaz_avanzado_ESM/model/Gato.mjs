import Animal from './Animal.mjs';
import { Sonidos } from '../data/Interfaz.mjs';
class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }
    hacerSonido(sonido) {
        return sonido;
    }
}
export default Gato;