// Defne a function (1.) 
function getLenght (numDuration){
	if (numDuration <= 10){
		reimbursement = 8.00;
	}else if (numDuration <= 20) {
		reimbursement = 11.00;
	}else if (numDuration <= 30) {
		reimbursement = 13.50;
	}else if (numDuration <= 45) {
		reimbursement = 16.50;
	}else {
		reimbursement = 21.00;
	}
	
	return reimbursement;
	}
	// Defne a function (2.) 
	
	function toPay (numFee, reimbursement){
		amountPayable = numFee - reimbursement + 15.90;
	
		return amountPayable;
	}
		
	// Define a function (3.) 
	function calculate() {
			// Read values from the input fields
			var duration = document.getElementById("length").value;
			var numDuration = Number(duration);
			var fee = document.getElementById("doctorsFee").value;
			var numFee = Number(fee);
			// Call the function (1.) which calculates Kela reimbursement 
			getLenght (numDuration);
			// Call the function (2.) which calculates amount left for the customer to pay
			toPay (numFee, reimbursement);
			// Write the answer on the page, to the answer div, as content of the div
			document.getElementById("answer").innerHTML = "Doctor's fee is " + numFee.toFixed(2) + " euros." + "<br/>" + "Kela reimbursement is " + reimbursement.toFixed(2) + " euroa." + "<br/ >" 
			+ "Office fee is 15.90 euros" +"<br/>" + "Customer needs to pay " + amountPayable.toFixed(2) + " euros.";
	}