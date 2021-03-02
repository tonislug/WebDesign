var x = "El autor del \"Guardian entre el centeno\" es J.D. Salinger";

function crear() {
  document.getElementById("sustituir").innerHTML = x;
}

var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var z = y.length;

function contar() {
  document.getElementById("longitud").innerHTML = z;
}

var a = "Encuentra la palabra esta en la texto de la palabra";
var b = a.indexOf(" En");
// indexOf("") es para la primera palabra
// lastIndexOf("") es para la ultima palabra

function buscar() {
  document.getElementById("palabra").innerHTML = b;
}

var d = a.search("la");

function busqueda() {
  document.getElementById("texto").innerHTML = d;
}

var e = "Manzana, Platano, Kiwi";
var f = e.slice(1,-15);

function extraer() {
  document.getElementById("slice").innerHTML = f;
}

var g = e.substring(3);

function extraer2() {
  document.getElementById("substring").innerHTML = g;
}

var h = e.substr(9,5);

function extraer3() {
  document.getElementById("substr").innerHTML = h;
}

function reemplazar() {
  var i = document.getElementById("reemplazo").innerHTML;
  var j = i.replace(/facebook/g,"whatsapp");
  
  document.getElementById("reemplazo").innerHTML = j;
}

function mayusculas() {
  var k = document.getElementById("mayusculas").innerHTML;
  var l = k.toLowerCase();
  // toUpperCase() - Convertir a mayusculas
  // toLowerCase() - Convertir a minusculas
  
  document.getElementById("mayusculas").innerHTML = l;
}

var m = "Hola";
var n = "Mundo";
var o = m.concat(" ",n);
// m + " " + n
function unir() {
  document.getElementById("unir").innerHTML = o;
}

var p = "   ¡Hola Mundo!   ";
var q = p.trim();

function quitarespacios() {
  document.getElementById("espacios").innerHTML = q;
}

var r = "Hola Mundo";
var s = r.charAt(5);

function letraposicion() {
  document.getElementById("caracter").innerHTML = s;
}

var t = "Hola Mundo";
var u = t.charCodeAt(8);

function letracodigo() {
  document.getElementById("codigo").innerHTML = u;
}

var v = "5";
var w = v.padStart(4,1);

function rellenar() {
  document.getElementById("rellenar").innerHTML = w;
}

//var z = ["Volvo", "BMW"]
var aa = "a,b,c,d,e,f,g";
var ab = aa.split(",");

function convertir() {
  document.getElementById("convertir").innerHTML = ab[2];
}

