//Esta es la función de cómo se usa WeakMap pero usando con constructor parámetros.
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
//---Esta es una opción de cómo leer en cada objeto

let p1 = new Persona('Alvarito', 20);
let p2 = new Persona('Juanito', 15);

console.log("Hola, soy " + p1.getNombre() + " y tengo " + p2.getEdad() + " años");

p1.setEdad(50);
p1.setNombre("Álvaro");

console.log('Ahora soy don '+p1.getNombre()+" porque me he dado cuenta que tengo "+p1.getEdad()+" años");

//-- Pero también tiene otra opción que es leer ambos objetos usando un array

let personas = [p1,p2];
console.log("-----Lista de personas-----");
for (let i = 0; i < personas.length; i++) {
    console.log("Se llama "+personas[i].getNombre()+" y tiene "+personas[i].getEdad()+" años");
    
}
console.log("---------------------------");


