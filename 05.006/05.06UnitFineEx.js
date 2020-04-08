function calculateUnitFine() {
        // Read the value from the input field into a variable
		  var netIncome = document.getElementById ("txtNetIncome").value;
		  
		// Calculate the unit fine and assign the result into another variable
		
		var calculatedFine = (netIncome - 255)/60;
		var finalcalculatedFine = calculatedFine.toFixed(2)

		// Write the answer to the web page DOM, in the answer div, as the content
		document.getElementById("answerDiv").innerHTML = "Unit fine is " + finalcalculatedFine + " euros.";
}