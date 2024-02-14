let {Sonidos} = require('../data/Interfaz.js');
let {MiInterfaz} = require('../data/Interfaz.js');
let Perro = require('../model/Perro.js')
let Gato = require('../model/Gato.js');

let miPerro = new Perro("Firulais", "Yorkshire");
MiInterfaz.enforceInterface(miPerro, Sonidos);
let miGato = new Gato("Don Gato", "Maine Coon");
MiInterfaz.enforceInterface(miGato, Sonidos);

console.log(
  miPerro.saludar() + " " + miPerro.hacerSonido("Gua gua!!")+"\n"+
  miGato.saludar() + " "+miGato.hacerSonido("Miau miau!!")
)
//console.log(miPerro.saludar() + "\n" + miGato.saludar());