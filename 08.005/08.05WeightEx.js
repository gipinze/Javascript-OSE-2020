
function showWeightGoals() {
	var weight = Number (document.getElementById("weight").value);
	var weightloss = ((weight * 0.1) / 7);
	var text = "" ;
	var weightResult;

	var i = 1
	for (i = 1; i <= 7; i++) {
		weight = ( weight - weightloss);
		weightResult = weight.toFixed(1);
		text += "After " + i + ". week " + weightResult + "kg" + "<br/>";
	}

	document.getElementById("answer").innerHTML = text;
		// TODO
		
}