function showComparisonScores() {
		var votes = document.getElementById("votes").value;
		var candidates = document.getElementById("candidates").value;
		var i = 1; 

		for (i=1; i <= candidates; i++){
			document.getElementById("answer").innerHTML += i + ". candidate: " + (votes/i).toFixed(0) + " <br>";
		}
}