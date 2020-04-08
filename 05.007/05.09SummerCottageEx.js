function calculateRent() {
		
		 // TODO
		var rent = document.getElementById ("rent").value;
		var participants = document.getElementById ("participants").value;
		var quotient = (rent/participants).toFixed(2);
		
		document.getElementById("answerDiv").innerHTML = "Rent per participant is" + quotient + "euros";
}