import Perro from "../model/Perro.mjs";
import Gato from "../model/Gato.mjs";


//---Esta es la opcion sin try catch---
/*
let miPerro = new Perro("Firulais", "Yorkshire");
let miGato = new Gato("Don Gato", "Maine Coon");

console.log(
    miPerro.toString()+"\n"+
    miGato.toString()
);
*/

//---Esta es la opción con try catch y es más recomendable---
try {
    let miPerro = new Perro("Firulais", "Yorkshire");
    //console.log(miPerro.hacerSonido("gua gua"));
    console.log(miPerro.toString());
} catch (error) {
    console.error(error.message); // Mostrará el error para la clase Perro
}

try {
    let miGato = new Gato("Don Gato", "Maine Coon");
    //console.log(miGato.hacerSonido("miau miau"));
    console.log(miGato.toString());
} catch (error) {
    console.error(error.message); // Mostrará el error para la clase Gato
}



