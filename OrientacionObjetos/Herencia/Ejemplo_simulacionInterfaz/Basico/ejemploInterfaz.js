// Definir una interfaz
const MyInterface = {
    abstractMethod: function() {
      throw new Error("Abstract method not implemented");
    }
  };
  
  // Implementar la interfaz en una clase concreta
  class ConcreteClass {

    constructor(nombre, apellidos){
        this.nombre=nombre;
        this.apellidos=apellidos;
    }
    // Implementar el método abstracto de la interfaz
    
    abstractMethod() {
      // Implementación específica de la clase concreta
      console.log("Método abstracto implementado en ConcreteClass");
    }
    
  }
  
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
  