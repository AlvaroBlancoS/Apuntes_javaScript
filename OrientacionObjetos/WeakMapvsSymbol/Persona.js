//Esto es una clase sencilla
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      console.log('Hola, mi nombre es '+this.nombre+ ' y tengo ' +this.edad+' años.');
    }
  }
  /*
  let persona1 = new Persona("Juan", 30);
  persona1.saludar();
  */
//----------------------
//Esto es una clase también sencilla pero disimulando como si estamos usando los metodos getter y setter
//Además no tiene ningún constructor
  class Personav2{
    _nombre;
    _edad;

    get getNombre(){
        return this._nombre;
    }
    set setNombre(agregarNombre){
        this._nombre=agregarNombre;
    }
    get getEdad(){
        return this._edad;

    }
    set setEdad(agregarEdad){
        this._edad = agregarEdad;
    }

  }
/*
  let p = new Personav2();
  p.setNombre = "Alvarito";
  p.setEdad = 20;

  console.log('Hola, mi nombre es '+p.getNombre+' y tengo '+p.getEdad+' años');
  */
 //----------------------------------------------