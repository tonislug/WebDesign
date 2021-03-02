var x = 100;
var y = 50;
var z = x + y;

function sumar() {
	document.getElementById("adicion").innerHTML = z;
}

var a = 100;
var b = 50;
var c = a - b;

function restar() {
	document.getElementById("sustraccion").innerHTML = c;
}

var d = 100;
var e = 50;
var f = 3;
var g = (d + e) * f;

function multiplicacion() {
	document.getElementById("multiplicacion").innerHTML = g;
}

var h = 100;
var i = 50;
var j = h / i;

function division() {
	document.getElementById("division").innerHTML = j;
}

var k = 10;
var l = 5;
var m = k ** l;

function exponente() {
	document.getElementById("exponencia").innerHTML = m;
}

var n = 11;
var o = 7;
var p = n % o;

function resto() {
	document.getElementById("resto").innerHTML = p;
}

var r = 11;
r++;
var s = r;

function incremento() {
	document.getElementById("incremento").innerHTML = s;
}

var t = 11;
t--;
var u = t;

function decremento() {
	document.getElementById("decremento").innerHTML = u;
}

var v = 11;
v += 5;
var w = v;

function agrupacion() {
	document.getElementById("agrupacion").innerHTML = w;
}

