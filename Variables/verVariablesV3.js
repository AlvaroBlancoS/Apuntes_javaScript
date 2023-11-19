let a ="Soy una variable global y además no constante.";
{
    /*let x = "Soy la variable no constante"; // x solo es visible dentro de este bloque
    x +=" y puedo cambiar el texto";
    const y= "Soy la variable constante y no puedo cambiar el texto";
    console.log(x+" dentro del bloque"+"\n"+y); // 10*/
    console.log(a+" Estoy dentro de un bloque");
  }

  console.log(a+" No estoy dentro de un bloque");
  
  //console.log(x); // Esto causará un error, ya que x no está definida fuera del bloque.
  