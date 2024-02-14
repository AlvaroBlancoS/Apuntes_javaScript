//Crea una clase base
function Microprocesador(marca, modelo) {
    this.marca = marca;
    this.modelo= modelo;
}

//creo el método de microprocesador
Microprocesador.prototype.encender = function () {
    console.log("El microprocesador "+this.marca+" "+ this.modelo +" se ha puesto en marcha");
}

//creo otra clase base
function Ordenador(tipo) {
    this.tipo = tipo;
    this.Microprocesador = new Microprocesador("AMD","Ryzen 5 4500");
}

//Además también crearé el método para Ordenador
Ordenador.prototype.usar = function () {
    this.Microprocesador.encender();
    console.log("Ahora puedo trabajar mi ordenador "+this.tipo);
}

//Creo una instancia de la clase Ordenador
var miOrdenador = new Ordenador("Sobremesa");
//Y utilizo el método usar.
miOrdenador.usar();
