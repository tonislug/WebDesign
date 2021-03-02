var a = 92;
var b = 4;
var c = "";

while (a != b) {
	a = a - b;
	c = c + a + "<br>";
}

function igual() {
	document.getElementById("igual").innerHTML = c + (a == b); 
}

