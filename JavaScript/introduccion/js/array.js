var ropa = [" abrigo", " pantalones", " camisa", " cinturon"];
ropa[1] = " falda";

function cambiar() {
	document.getElementById("cambiar").innerHTML = ropa;
}

var motos = [" Honda", " Suzuki", " Kawasaki"];

function completa() {
	document.getElementById("completa").innerHTML = motos;
}

function tipo() {
	document.getElementById("tipo").innerHTML = typeof motos;
}

var informacion = 
["milisegundos", "motos", "funcion"];
informacion[0] = Date.now;
informacion[1] = motos;
informacion[2] = typeof motos;

function almacenar() {
	document.getElementById("almacenar").innerHTML = informacion[0] + "<br>" 
	+ informacion[1] + "<br>" 
	+ informacion[2];
}

function numero() {
	document.getElementById("numero").innerHTML = motos.length;
}

var frutas, texto, contador, incremento;
frutas = [" Platano", " Naranja", " Manzana", " Mango"];
texto = "<ul>";
contador = frutas.length;
incremento = 0;

for (incremento = 0; incremento < contador; incremento++) {
	texto += "<li>" + frutas[incremento] + "</li>"; 
}

texto += "</ul>"

function bucle() {
	document.getElementById("bucle").innerHTML = texto;
}

function agregar() {
	frutas.push(" Limon");
	document.getElementById("agregar").innerHTML = frutas;
}

