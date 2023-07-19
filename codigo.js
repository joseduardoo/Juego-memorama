
/*
var cartas = [
{valor: "A", edo: "back", color: "BlueViolet"},
{valor: "A", edo: "back", color: "BlueViolet"},
{valor: "B", edo: "back", color: "Aqua"},
{valor: "B", edo: "back", color: "Aqua"},
{valor: "C", edo: "back", color: "DarkGray"},
{valor: "C", edo: "back", color: "DarkGray"},
{valor: "D", edo: "back", color: "DarkOrange"},
{valor: "D", edo: "back", color: "DarkOrange"},
{valor: "E", edo: "back", color: "DarkTurquoise"},
{valor: "E", edo: "back", color: "DarkTurquoise"},
{valor: "F", edo: "back", color: "DeepPink"},
{valor: "F", edo: "back", color: "DeepPink"},
{valor: "G", edo: "back", color: "GreenYellow"},
{valor: "G", edo: "back", color: "GreenYellow"},
{valor: "H", edo: "back", color: "Yellow"},
{valor: "H", edo: "back", color: "Yellow"}
];
*/
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//La variable cards va a contener las cartas/tarjetas con su repectivo valor (A,A,B,B,C,C,etc.)
var cards = [];
var card = {};
//numero te tarjetas que quiero ***** tiene que ser un numero par  ****
const noCards = 56

//Variables que ayudan a voltear solo 2 cartas
var count=[];
var flipedCards=[];

//Funcion que asigna los botones en HTML
function createCards() {
	/*El valor 17 se puede cambiar por cualquier otro numero entero, positivo e impar (menos el 1)*/
	for (let i = 1; i < (noCards + 1); i++) {
		var newButton = document.createElement("button");
	    newButton.innerHTML = "?";
	    newButton.setAttribute("type","button");
	    newButton.setAttribute("id","card"+i);
	    newButton.setAttribute("class","card back");
	    newButton.setAttribute("onclick",`flip('card${i}',${i-1})`);
	    document.getElementById("deck").appendChild(newButton);
	    assignValues();
	};
};

//Funcion que asigna los valores al arreglo de cartas *ordenado de la A a la Z
function assignValues() {
	let e = 0;
	let f = 0;

	for (let j = 1; cards.length < noCards; j++) {
		/*cuando se tenga completen 27 pares de tarjetas de la A a la Z "f" tendra el valor de "1"
		Entonces comenzara a crear cartas A1, A1, B1, B1 y y cuando se terminen las letras denuevo, 
		se comenzara a crear cartas A2, A2, B1, B1
		*/
	    if (f > 0) {
	    	card = {};
		    card.value= abc[e] + f;
	        cards.push(card); 
	        cards.push(card);
	    } else {
	    	card = {};
		    card.value = abc[e];
	        cards.push(card);
	        cards.push(card);
	    };
	    e++;
	    if (e > 26) {
	    	e = 0;
	    	f++;
	    };
	};
};

//Funcion que muestra las cartas, el boton de reiniciar, revuelve las cartas y oculta el boton comenzar
function start() {
	createCards();
	document.getElementById("deck").classList.remove("unseen");
	document.getElementById("restart").classList.remove("unseen");
	cards.sort(function(){return 0.5 - Math.random()});
	document.getElementById("start").classList.add("unseen");
	document.getElementById("demo").innerHTML = cards.length;
};

// Funcion que "voltea" las cartas/tarjetas
function flip(id, card) {
	document.getElementById(id).classList.remove("back");
	document.getElementById(id).classList.add("front");
	document.getElementById(id).innerHTML = cards[card]["value"];

	count.push(cards[card]["value"]);
	flipedCards.push(id);

	//condicion que permite voltear solo dos cartas/tarjetas
	if (count.length == 2){
		if (count[0] == count[1]) {
			count = [];
			flipedCards = [];
		}
		else {
			count = [];
			setTimeout(returnFlipCard, 1500, flipedCards[0], flipedCards[1]);
			flipedCards = [];
		};
	};
};

// Funcion que voltea de nuevo las cartas volteadas
function returnFlipCard(id1, id2) {
    document.getElementById(id1).innerHTML = "?";
    document.getElementById(id2).innerHTML = "?";
    document.getElementById(id1).classList.add("back");
    document.getElementById(id2).classList.add("back");
    document.getElementById(id1).classList.remove("front");
    document.getElementById(id2).classList.remove("front");
}

// Funcion que reinicia el juego
function restart() {
	cards.sort(function(){return 0.5 - Math.random()});
	var elemento = document.getElementsByClassName("card");
	for(var i = 0; i < elemento.length; i++) {
		elemento[i].innerHTML = "?";
		elemento[i].classList.add("back");
		elemento[i].classList.remove("front");
	};

};

/*
function voltear(id,carta) {
	var id=id.toString();
	var carta=Number(carta);
	document.getElementById(id).classList.remove("back");
    document.getElementById(id).classList.add("front");
	document.getElementById(id).style.backgroundColor = cartas[carta]["color"];
	document.getElementById(id).innerHTML = cartas[carta]["valor"];
};

*/

/*	
document.getElementById("boton1").style.backgroundColor='BlueViolet'; 

pendiente, voltear cartas impares

			document.getElementById(cartasvolteadas[0]).style.backgroundColor="gray"
			document.getElementById(cartasvolteadas[1]).style.backgroundColor="gray"
			document.getElementById(cartasvolteadas[0]).innerHTML = "?";
			document.getElementById(cartasvolteadas[1]).innerHTML = "?";
			document.getElementById(cartasvolteadas[0]).style.color = "white";
			document.getElementById(cartasvolteadas[1]).style.color = "white";
*/


