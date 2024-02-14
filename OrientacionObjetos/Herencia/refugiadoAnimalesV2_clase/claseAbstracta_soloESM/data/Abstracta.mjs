/**
 * Es una clase
 */
export class AbstractAnimal {
    constructor() {
        if (new.target === AbstractAnimal) {
            throw new Error("No se puede crear una instancia de una clase abstracta");
        }
    }
/**
 * 
 * @param {*} sonido 
 */
    //Debo indentificar el método y la clase
    hacerSonido(sonido) {
        const className = this.constructor.name;
        const methodName = "hacerSonido";
        throw new Error("El método de "+methodName+" debe ser implementado en la clase "+className);
    }
}

/**
 * Es una clase base 
 */
export function AbstractAnimal2() {
    if (new.target === AbstractAnimal2) {
        throw new Error("No se puede crear una instancia de una clase abstracta");
    }
}
/**
 * 
 * @param {*} sonido 
 */
AbstractAnimal2.prototype.hacerSonido = function (sonido) {
    const className = this.constructor.name;
    const methodName = "hacerSonido";
    throw new Error("El método de "+methodName+" debe ser implementado en la clase "+className);
};
