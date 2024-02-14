//Esta es la función de cómo se usa WeakMap pero usando con constructor sin parámetros.
const propiedadPrivada = new WeakMap();

class Persona {
    constructor(nombre, edad) {
        propiedadPrivada.set(this, { nombre, edad });
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
let p = [new Persona('Alvarito', 20), new Persona('Julanito', 30), new Persona('Maria', 55), new Persona('Juanita', 18), new Persona("Mario", 25), new Persona("Julian", 40), new Persona("Isabel", 35), new Persona("Ana", 60)];
console.log("----------Listado de personas----------");
/*
for (const valor of p) {
    console.log(valor.getNombre() + " " + valor.getEdad());
}
*/
p.forEach(valor => {
    console.log(valor.getNombre()+" "+valor.getEdad());
});
console.log("-----------------------------------------------");