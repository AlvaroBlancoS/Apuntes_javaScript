
/*
// Crear un símbolo
const coche = Symbol();

// Cada símbolo es único
const moto = Symbol();

console.log(coche === coche); // true
*/



/*
const coche = Symbol();
const moto = Symbol();

const miObjeto = {
  [coche]: "Esto es un coche",
  [moto]: "Esto es una moto"
};


console.log(miObjeto[coche]+"\n"+miObjeto[moto]);
*/

// Ejemplo de Symbol.iterator
/*
const miIterable = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  for (const valor of miIterable) {
    console.log(valor);
  }
  */
  // Salida: 1, 2, 3
/*
Hay que tener muy en cuenta que no es un array, sino es un objeto
con un iterador definido a través de Symbol.iterator.
Por lo tanto, no se puede acceder  a sus propiedades directamente. Pero
para poder acceder a estos elementos por índice, se puede convertir una iterable en un
array antes de hacerlo
*/

  const miIterable ={
    [Symbol.iterator]:function *() {
        yield "Coche";
        yield "Moto";
    }
  };
  const elemento = Array.from(miIterable);
  console.log(elemento[1]);
  