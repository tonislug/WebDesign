var a = "Seg�n Takeyas la IA es una rama de las ciencias computacionales encargada de estudiar modelos de c�mputo capaces de realizar actividades propias de los seres humanos con base en dos de sus caracter�sticas primordiales: el razonamiento y la conducta.";
var b = a.length;

function contar() {
  document.getElementById("solucion1").innerHTML = b;
}

var c = a.search("humanos");

function posicion() {
  document.getElementById("solucion2").innerHTML = c;
}

var d = a.replace("IA","Inteligencia artificial");

function reemplazar() {
  document.getElementById("texto").innerHTML = d;
}

