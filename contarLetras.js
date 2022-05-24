function cuantasVecesAparece(cadena, caracter){
    var indices = [];
    for(var i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
      return indices.length;
  }
  
  module.exports = contarLetras