function cuantasVecesAparece(cadena, caracter){
    var indices = [];
    for(var i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
      return indices.length;
  }
  
  var coincidencias = cuantasVecesAparece("Cuantas 'A' aparecen en esta cadena.", "a")
  
  console.log(coincidencias)