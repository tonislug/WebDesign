var a = 3.14; //numero decimal
var b = 3; //numero entero

function ndecimal() {
	document.getElementById("ndecimal").innerHTML = a + "<br>" + b;
}

var c = 314e5; //notacion cientifica (+) 314 * 10^5
var d = 314e-5; //notacion cientifica (-) 314 * 10^-5

function notacientifica() {
	document.getElementById("notacientifica").innerHTML = c + "<br>" + d;
}

var e = 999999999999999; 
var f = 9999999999999999; 

function precision() {
	document.getElementById("precision").innerHTML = e + "<br>" + f;
}

var g = 0.1; 
var h = 0.2; 

function precision2() {
	document.getElementById("precision2").innerHTML = g + h;
}

var i = 20; 
var j = 10; 

function suma() {
	document.getElementById("suma").innerHTML = i + j;
}

var k = 20; 
var l = "Manzana"; 
var p = k / l;

function nonumero() {
	document.getElementById("nonumero").innerHTML = typeof p;
}

var m = 20; 
var n = "Manzana"; 
var o = m / n;

function noesnumero() {
	document.getElementById("noesnumero").innerHTML = isNaN(o);
}

var q = 2; 
var r = ""; 

while (q != Infinity) {
	q = q * q;
	r = r + q + "<br>";
}

function infinito() {
	document.getElementById("infinito").innerHTML = r;
}

var s = 0xC;

function hexadecimal() {
	document.getElementById("hexadecimal").innerHTML = "0xC = " + s;
}

var t = 2809;

function conversor() {
	document.getElementById("conversor").innerHTML = "Hexadecimal: " + t.toString(16)
	 + "<br>" + "Decimal: " + t.toString(10)
	 + "<br>" + "Octal: " + t.toString(8)
	 + "<br>" + "Binario: " + t.toString(2);
}

var u = 123;
var v = new Number(123);

function transformar() {
	document.getElementById("transformar").innerHTML = typeof u + "<br>"
	 + typeof v + "<br>" + (u == v);
}

var w = 166.386;

function redondear() {
	document.getElementById("redondear").innerHTML = w.toFixed(0) + "<br>"
	 + w.toFixed(1) + "<br>" + w.toFixed(2);
}

var x = 9.656;

function exacto() {
	document.getElementById("exacto").innerHTML = x.toPrecision(2);
}

var y = 5647.124;

function exponente() {
	document.getElementById("exponente").innerHTML = y.toExponential(5);
}

var z = true;
var aa = false;
var ab = "10";
var ac = " 10 ";
var ad = "Sergio";

function numero() {
	document.getElementById("numero").innerHTML = Number(z) + "<br>" + Number(aa)
	 + "<br>" + Number(ab) + "<br>" + Number(ac) + "<br>" + Number(ad);
}

var ae = new Date("2021-02-15")

function fecha() {
	document.getElementById("fecha").innerHTML = Number(ae);
}

function entero() {
	document.getElementById("entero").innerHTML = parseInt("10") + "<br>"
	 + parseInt("10.33") + "<br>" 
	 + parseInt("10 6") + "<br>"
	 + parseInt("10 años") + "<br>" 
	 + parseInt("años 10");
}

function flotante() {
	document.getElementById("flotante").innerHTML = parseFloat("10") + "<br>"
	 + parseFloat("10.33") + "<br>" 
	 + parseFloat("10 6") + "<br>"
	 + parseFloat("10 años") + "<br>" 
	 + parseFloat("años 10");
}

var af = Number.MAX_VALUE;

function maxvalue() {
	document.getElementById("maxvalue").innerHTML = af;
}

var ag = Number.MIN_VALUE;

function minvalue() {
	document.getElementById("minvalue").innerHTML = ag;
}

var ah = Number.POSITIVE_INFINITY;

function pinfinito() {
	document.getElementById("pinfinito").innerHTML = ah;
}

var ai = Number.NEGATIVE_INFINITY;

function ninfinito() {
	document.getElementById("ninfinito").innerHTML = ai;
}

var aj = Number.NaN;

function nan() {
	document.getElementById("nan").innerHTML = aj;
}

