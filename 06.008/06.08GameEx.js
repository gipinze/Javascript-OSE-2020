
function play() {
		// Read value from the input field
		var bet = document.getElementById("bet").value;
		var betnumber = Number(bet);
		// Randomize dice pips between 1-6
		var pips = Math.round( (Math.random( ) * 5) + 1 );
		// Calculate win base on pips
		if (pips === 1 || pips === 3 || pips === 5) {
			var answer = "Pips was " + pips + " - no pay"
		}
		else if (pips === 2 || pips === 4 ) {
			var answer = "Pips was " + pips + " - Paid back: " + (betnumber * 1.25).toFixed(2) + "euros"
		}
		else {
			var answer = "Pips was " + pips + " - Paid back: " + (betnumber * 1.50).toFixed(2) + "euros"
		}
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = answer;
}
