//Esta es la función de cómo se usa WeakMap pero usando con constructor sin parámetros.
const propiedadPrivada = new WeakMap();

class Persona {
    constructor(nombre, edad) {
        propiedadPrivada.set(this,{nombre, edad});
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
let p  = [new Persona('Alvarito',20), new Persona('Julanito', 30), new Persona('Maria', 55), new Persona('Juanita', 18), new Persona("Mario",25), new Persona("Julian",40),new Persona("Isabel",35),new Persona ("Ana", 60)];

let resultado = "pepito";
let aparece = false;
/*
console.log("----------Buscador----------");
for (let i = 0; i < p.length; i++) {
 if(p[i].getNombre()===resultado){
    console.log("Nombre "+p[i].getNombre()+" y edad "+p[i].getEdad()+" años")
    aparece=true;
    break;
}
}
if(aparece==false){
    console.log(resultado+" no existe esta persona");
}
console.log("----------------------------");
*/
/*

console.log("----------Lista de personas mayores de 30 años----------");
let i = 0 ;
while (i<p.length) {
    if(p[i].getEdad()>=30){
        console.log('Nombre '+p[i].getNombre()+" y edad "+p[i].getEdad()+" años") 
    }
    i++;
}
console.log("--------------------------------------------------------");
*/

console.log("----------Buscador V2----------");
let j = 0;
do{
    if(p[j].getNombre()===resultado){
        console.log('Nombre '+p[j].getNombre()+" y edad "+p[j].getEdad()+" años")
        aparece=true;
    }
    j++;
}while(j<p.length);

if(aparece==false){
console.log(resultado+"no existe esta persona");
}
console.log("---------------------------------------");

