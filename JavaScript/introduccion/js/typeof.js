var a = "Coche";

function texto() {
  document.getElementById("string").innerHTML = typeof a;
}

var b = 3;

function numero() {
  document.getElementById("number").innerHTML = typeof b;
}

var c;

function indefinida() {
  document.getElementById("undefined").innerHTML = typeof c;
}

var d = null;

function objeto() {
  document.getElementById("object").innerHTML = typeof d;
}

var e = null;
var f;

function esverdad() {
  document.getElementById("boolean").innerHTML = typeof e + "<br>" + typeof f + "<br>" + (null === undefined) + "<br>" + (null == undefined);
}