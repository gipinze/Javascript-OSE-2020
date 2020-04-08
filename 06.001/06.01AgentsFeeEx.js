function calculateFee() {
		
	// Read value from the input field
		var price = document.getElementById("price").value;
		var fee = 0.0344;
	// Calculate fee, save the result to a variable
		var result = (price * fee);
		
	// if the fee is under minimum, update it
		if (result <= 2400 ) {
			var finalcalculation = 2400;
		} else {
			var finalcalculation = (price * fee);
		}
		var roundedfinalcalculation = (finalcalculation).toFixed(2)
	// Write the answer on the page, to the fee div, as content of the div
		document.getElementById("fee").innerHTML = "Real state agent's fee is " + roundedfinalcalculation + " euros";
}