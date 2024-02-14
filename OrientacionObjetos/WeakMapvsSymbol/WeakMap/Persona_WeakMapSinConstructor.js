//Esta es la función de cómo se usa WeakMap pero usando con constructor sin parámetros.
const propiedadPrivada = new WeakMap();

class Persona {
    constructor() {
        propiedadPrivada.set(this, {});
    }

    getNombre() {
        return propiedadPrivada.get(this).nombre;
    }

    setNombre(agregarNombre) {
        propiedadPrivada.get(this).nombre = agregarNombre;
    }

    getEdad() {
        return propiedadPrivada.get(this).edad;
    }

    setEdad(agregarEdad) {
        propiedadPrivada.get(this).edad = agregarEdad;
    }
}
let alvarito = new Persona();

alvarito.setNombre("Alvarito");
alvarito.setEdad(30);

let julanito = new Persona();
julanito.setNombre("Julanito");
julanito.setEdad(20);

let lista = [alvarito, julanito];
console.log("-----Lista de personas-----");
for (let i = 0; i < lista.length; i++) {
    console.log("nombre: " + lista[i].getNombre() + ", edad: " + lista[i].getEdad() + " años");

}
console.log("---------------------------");


