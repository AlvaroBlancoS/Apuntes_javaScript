// Ejecutar.js
import { MyInterface } from './Interfaz.mjs';
import ConcreteClass from './Clase.mjs';

// Verificar que la clase cumple con la interfaz
function enforceInterface(instance, interfaceDef) {
  for (const method of Object.keys(interfaceDef)) {
    if (typeof instance[method] !== 'function') {
      throw new Error(`Clase no cumple con la interfaz. Falta el método: ${method}`);
    }
  }
}

// Crear una instancia de la clase
const instance = new ConcreteClass();

// Verificar que la instancia cumple con la interfaz
enforceInterface(instance, MyInterface);

// Ejecutar el método abstracto implementado en la clase concreta
instance.abstractMethod();

//instance.abstractMethodV2();
