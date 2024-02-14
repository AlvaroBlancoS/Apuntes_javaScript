// Clase.js
import { MyInterface } from './Interfaz.mjs';

class ConcreteClass {


  // Implementar el método abstracto de la interfaz
  abstractMethod() {
    // Implementación específica de la clase concreta
    console.log("Método abstracto implementado en ConcreteClass");
  }
  abstractMethodV2(){
    console.log("método abstracto de versión 2 implementado en ConcreteClass");
  }
}

export default ConcreteClass;
