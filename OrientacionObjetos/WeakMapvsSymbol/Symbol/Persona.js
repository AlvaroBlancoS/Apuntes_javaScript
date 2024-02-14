//--Modelo---
const modificadorNombre = Symbol("nombre");
const modificadorEdad = Symbol("edad");
class Persona {

    constructor(nombre, edad) {
        this[modificadorNombre] = nombre;
        this[modificadorEdad] = edad;
    }
    getNombre() {
        return this[modificadorNombre];
    }
    getEdad() {
        return this[modificadorEdad];
    }
    setNombre(agregarNombre) {
        this[modificadorNombre] = agregarNombre;
    }

    setEdad(agregarEdad) {
        this[modificadorEdad] = agregarEdad;
    }
}
//---Datos---
class Lista {
    lista = [new Persona("Pedrito", 18), new Persona("Maria", 19), new Persona("Jesulito", 20)];
    /**
     * Mostrar la lista de las personas
     */
    verLista() {
        console.log("---Lista de personas---");
        this.lista.forEach(element => {
            console.log(element.getNombre() + " tiene " + element.getEdad() + " años");
        });
        console.log("----------------------");
    }
    /**
     * 
     * @returns 
     * Comprobar si la lista de persona está vacía o no
     */
    verSiEstaLlena() {
        if (this.lista.length === 0) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * 
     * @returns 
     * Comprobar si la lista de persona está vacía o no
     * versión 2
     */
    verSiEstaLlenaV2() {
        return this.lista.length > 0;
    }

    /**
     * 
     * @param {*} buscarNombre 
     * Con break solo se utilizar para For ... of y
     * no foreach
     */
    buscarPersona(buscarNombre) {
        console.log("---Lista de una persona---");
        for (const element of this.lista) {
            if (element.getNombre() === buscarNombre) {
                console.log(element.getNombre() + " tiene " + element.getEdad() + " años");
                break;
            }
        }
        console.log("--------------------------");
    }

    /**
     * 
     * @param {*} buscarNombre 
     * @returns 
     * Básicamente devuelve 
     * un true si la lista de 
     * persona existe
     */
    buscarPersonaV2(buscarNombre) {

        for (const element of this.lista) {
            if (element.getNombre() === buscarNombre) {
                return true;
            }
        }

        return false;
    }
    /**
     * 
     * @param {*} buscarNombre 
     * @returns 
     * Es parecido el anterior, solo devuelve los
     * elementos si el nombre de la persona existe
     */
    buscarPersonaV3(buscarNombre) {
        for (const element of this.lista) {
            if (element.getNombre() === buscarNombre) {
                return element;
            }
        }
        return null; // Retorna null si no se encuentra la persona
    }
    /**
     * 
     * @param {*} buscarNombre 
     * @param {*} nuevaEdad 
     * He utlizado el método buscarPersonaV3, es una buena opción para
     * que nos permita usar los elementos y asignar getter o setter.
     */
    modificarEdad(buscarNombre, nuevaEdad) {
        const personaEncontrada = this.buscarPersonaV3(buscarNombre);
        if (personaEncontrada) {
            if (parseInt(nuevaEdad) < 18) {
                console.log("===>Tiene que ser mayor de 18 años.");
                return;
            }
            personaEncontrada.setEdad(nuevaEdad);
            //NO ES NECESARIO:  
            //console.log("Edad modificada con éxito.");
        }/*
         else {
           //NO ES NECESARIO: 
           console.log(buscarNombre+" : Persona no encontrada.");
        }
        */
    }
    /**
     * 
     * @param {*} introducirNombre 
     * @param {*} introducirEdad 
     */
    agregarUnaPersona(introducirNombre, introducirEdad) {
        if (parseInt(introducirEdad) >= 18) {
            const nuevaPersona = new Persona(introducirNombre, introducirEdad);
            this.lista.push(nuevaPersona);
        } else {
            console.log("===>Tiene que ser mayor de 18 años.");
        }
    }


    /**
     * 
     * @param {*} nombreEliminar 
     * Simplemente crear una lista para excluir la persona para
     * ser eliminado.
     */
    eliminarUnaPersona(nombreEliminar) {
        const personaEncontrada = this.buscarPersonaV3(nombreEliminar);
        if (personaEncontrada) {
            this.lista = this.lista.filter(persona => persona.getNombre() !== nombreEliminar);
        } else {
            console.log("===>" + nombreEliminar + " esa persona no está en la lista.")
        }
    }

}

function entrada(mensaje) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(mensaje, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

let sigo = true;
async function informacion() {
    do {
        const elegirOpciones = await entrada("Elige una opción:\n0-Salir\n1-Lista de personas\n2-Buscar una persona\n3-Corregir edad\n4-Registrar persona\n5-Eliminar persona\n");
        sigo = await opciones(elegirOpciones);
    } while (sigo);
}

let l = new Lista();
async function opciones(opcion) {
    let nombre = null;
    let edad = null;
    switch (parseInt(opcion)) {
        case 0://Confirmar si el usuario quiere salir.
            const resp = await entrada("¿Deseas continuar? s/n\n");
            return (resp.toLowerCase() === "s" || resp.toLowerCase() === "si") ? false : true;
        case 1://Ver lista de las personas
            if (l.verSiEstaLlena()) {
                l.verLista();
            } else {
                console.log("===> La lista está vacía");
            }
            return true;
        case 2://buscar persona
            nombre = await entrada("Introduce un nombre:\n");
            if (l.buscarPersonaV2(nombre) == true) {
                l.buscarPersona(nombre);
            } else {
                console.log("===> " + nombre + " no existe esta persona.");
            }
            return true;
        case 3://Modificar la edad de una persona existente
            nombre = await entrada("Introduce un nombre:\n");
            /*
            //ESTA NO, CACA
            edad = await entrada("Ingresa la nueva edad:\n");
            l.modificarEdad(nombre, parseInt(edad));   
            */
            //ESTA SI
            if (l.buscarPersonaV2(nombre) == true) {
                edad = await entrada("Ingresa la nueva edad:\n");
                l.modificarEdad(nombre, parseInt(edad));
            } else {
                console.log("===> " + nombre + " no está en la lista");
            }
            return true;
        case 4://Meter una nueva persona en la lista
            nombre = await entrada("Nombre:\n");
            edad = await entrada("Edad:\n");
            l.agregarUnaPersona(nombre, edad);
            return true;
        case 5://Eliminar una persona en la lista
            nombre = await entrada("Introduzca el nombre de la persona que deseas eliminar:\n");
            if (l.buscarPersonaV2(nombre) == false) {
                console.log("===> " + nombre + " no está en la lista");
            } else {
                let confirmacion = await entrada("¿Deseas continuar?");
                if (confirmacion.toLowerCase() === "s" || confirmacion.toLowerCase() === "si") {
                    l.eliminarUnaPersona(nombre);
                    console.log("===> Ha sido eliminado la lista correctamente.");
                } else {
                    console.log("===> Ha sido cancelado.");
                }
            }
            return true;
        default:
            console.log("===>Opción no válida");
            return true;
    }
}
informacion();
