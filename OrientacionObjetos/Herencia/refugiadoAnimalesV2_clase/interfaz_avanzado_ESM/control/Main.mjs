import { Sonidos } from '../data/Interfaz.mjs';
import { MiInterfaz } from '../data/Interfaz.mjs';
import Perro from '../model/Perro.mjs';
import Gato from '../model/Gato.mjs';

let miPerro = new Perro("Firulais", "Yorkshire");
MiInterfaz.enforceInterface(miPerro, Sonidos);
let miGato = new Gato("Don Gato", "Maine Coon");
MiInterfaz.enforceInterface(miGato, Sonidos);

console.log(
  miPerro.saludar() + " " + miPerro.hacerSonido("Gua gua!!")+"\n"+
  miGato.saludar() + " "+miGato.hacerSonido("Miau miau!!")
);
//console.log(miPerro.saludar() + "\n" + miGato.saludar());


