var coche1 = {
	marca: "Citroen",
	modelo: "C4",
	matricula: "1234MNO"
};

var coche2 = {
	marca: "Peugeot",
	modelo: "406",
	matricula: "5678ABC"
};

var coche3 = {
	marca: "Ford Mustang",
	modelo: "Eleanor",
	matricula: "9018XYZ",
	foto: "<img src='../img/eleanor-mustang.jpg' alt='coche' width='300' height='200'>"
};

function marcas() {
	document.getElementById("solucion1").innerHTML = coche1.marca + ", " + coche2.marca + ", " + coche3.marca;
}

function datos() {
	document.getElementById("solucion2").innerHTML = coche2.marca + ", "+ coche2.modelo + ", "+ coche2.matricula;
}

function modeloFord() {
	document.getElementById("solucion3").innerHTML = coche3.modelo;
}

function imagen() {
	document.getElementById("solucion4").innerHTML = coche3.foto;
}

