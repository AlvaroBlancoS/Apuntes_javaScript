//Es una clase base
function Animal(nombre) {
    this.nombre=nombre;
}
//Agrego método para la clase base
Animal.prototype.saludar = function () {
    console.log("Hola, soy "+this.nombre);
};

//He creado de una subclase que hereda Animal
function Perro(nombre, raza) {
    //He llamado un constructor de la clase base
    Animal.call(this,nombre);
    this.raza = raza;
}

//Estableciendo la herencia mediante prototipos
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

//Agregando métodos adicionales a la subclase
Perro.prototype.ladrar = function () {
    console.log("Guau, guau");
};

// Creando una instancia de la subclase
var miPerro = new Perro('Firulais', 'Labrador');

miPerro.saludar();
miPerro.ladrar();


