/**
 * Exporto los módulos
 */
module.exports ={
  Sonidos:{
    /**
     * Hacer que salga error si el método no ha agregado 
     * cualquier clase.
     * @param {*} sonido 
     */
    hacerSonido: function (sonido) {
      throw new Error("Este método no está implementado");
    } 
  },
  MiInterfaz:{
    /**
     * Hacer que cumpla la interfaz
     * @param {*} clase 
     * @param {*} interfaz 
     */
    enforceInterface: function (clase, interfaz) {
      for (const method of Object.keys(interfaz)) {
        if (typeof clase[method] !== 'function') {
          //console.log("La clase "+clase.constructor.name+" no cumple con la interfaz.Falta el método: "+method);
          throw new Error("La clase " + clase.constructor.name + " no cumple con la interfaz.Falta el método: " + method);
        }
      }
    }
  }
}