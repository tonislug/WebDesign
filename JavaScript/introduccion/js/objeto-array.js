var persona = { nombre: "Oscar", apellidos: "Sanchez", edad: 34, ojos: "Marron" };

var vive ={ localidad: "Lorca", //variable externa
			provincia: "Murcia"
};

function descripcion() {
	document.getElementById("ojos").innerHTML = persona.nombre + " " + "vive en " + 
	vive.localidad;
}

function marcas() {
	var coches = ["Renault", "Peugeot", "Citroen", "Seat"]; //variable local
	document.getElementById("coches").innerHTML = coches[0];
}

