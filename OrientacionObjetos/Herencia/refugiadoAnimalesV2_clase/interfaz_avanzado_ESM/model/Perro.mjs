import Animal from './Animal.mjs';
import { Sonidos } from '../data/Interfaz.mjs';
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza);
    }
    hacerSonido(sonido){
        return sonido;
    } 
}
export default Perro;

