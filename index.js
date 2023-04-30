var mercurio = document.getElementById("mercurio");
var venus = document.getElementById("venus");
var terra = document.getElementById("terra");
var marte = document.getElementById("marte");
var jupiter = document.getElementById("jupiter");
var saturno = document.getElementById("saturno");
var urano = document.getElementById("urano");
var netuno = document.getElementById("netuno");

var mercurioAngulo = 0;
var venusAngulo = 0;
var terraAngulo = 0;
var marteAngulo = 0;
var jupiterAngulo = 0;
var saturnoAngulo = 0;
var uranoAngulo = 0;
var netunoAngulo = 0;

var mercurioRaio = 50;
var venusRaio = 80;
var terraRaio = 120;
var marteRaio = 160;
var jupiterRaio = 230;
var saturnoRaio = 320;
var uranoRaio = 420;
var netunoRaio = 500;

var mercurioVelocidade = 2;
var venusVelocidade = 1.5;
var terraVelocidade = 1;
var marteVelocidade = 0.8;
var jupiterVelocidade = 0.5;
var saturnoVelocidade = 0.3;
var uranoVelocidade = 0.2;
var netunoVelocidade = 0.1;

function animar() {
	mercurio.style.transform = "rotate(" + mercurioAngulo + "deg) translate(" + mercurioRaio + "px) rotate(" + -mercurioAngulo + "deg)";
	venus.style.transform = "rotate(" + venusAngulo + "deg) translate(" + venusRaio + "px) rotate(" + -venusAngulo + "deg)";
	terra.style.transform = "rotate(" + terraAngulo + "deg) translate(" + terraRaio + "px) rotate(" + -terraAngulo + "deg)";
	marte.style.transform = "rotate(" + marteAngulo + "deg) translate(" + marteRaio + "px) rotate(" + -marteAngulo + "deg)";
	jupiter.style.transform = "rotate(" + jupiterAngulo + "deg) translate(" + jupiterRaio + "px) rotate(" + -jupiterAngulo + "deg)";
	saturno.style.transform = "rotate(" + saturnoAngulo + "deg) translate(" + saturnoRaio + "px) rotate(" + -saturnoAngulo + "deg)";
	urano.style.transform = "rotate(" + uranoAngulo + "deg) translate(" + uranoRaio + "px) rotate(" + -uranoAngulo + "deg)";
	netuno.style.transform = "rotate(" + netunoAngulo + "deg) translate(" + netunoRaio + "px) rotate(" + -netunoAngulo + "deg)";

	mercurioAngulo += mercurioVelocidade;
	venusAngulo += venusVelocidade;
	terraAngulo += terraVelocidade;
	marteAngulo += marteVelocidade;
	jupiterAngulo += jupiterVelocidade;
	saturnoAngulo += saturnoVelocidade;
	uranoAngulo += uranoVelocidade;
	netunoAngulo += netunoVelocidade;

	requestAnimationFrame(animar);
}

animar()

