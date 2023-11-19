var variableGlobal = "Soy lo más global";
function ejemplo() {
    var variableLocal = "Soy super local";
    //Accedo variable global
    console.log(variableGlobal+" dentro de la función");
    //Accedo variable local
    console.log(variableLocal+" dentro de la función");
}

ejemplo();

//También puedo acceder a la variable global desde fuera.
console.log(variableGlobal+" fuera de la función");
//Sin embargo la variable local no se puede acceder porque solo es visible dentro de la función.
console.log(variableLocal);