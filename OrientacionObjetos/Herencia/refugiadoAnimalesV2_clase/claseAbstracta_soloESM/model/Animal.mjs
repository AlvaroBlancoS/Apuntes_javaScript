import { AbstractAnimal } from "../data/Abstracta.mjs";
let _nombre = Symbol("nombre");
let _raza = Symbol("raza");

export default class Animal extends AbstractAnimal{
    constructor(nombre, raza){
        super();
        this[_nombre]=nombre;
        this[_raza]=raza;
    }

    getNombre(){
        return this[_nombre];
    }
    setNombre(agregarNombre){
        this[_nombre] = agregarNombre;
    }

    getRaza(){
        return this[_raza];
    }

    setRaza(agregarRaza){
        this[_raza] = agregarRaza;
    }
/*
    hacerSonido(sonido){
        return sonido+"!!!";
    }
  */  
}