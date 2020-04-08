// Defne a function (1.) 
function calculateMKR (doctorsVisit)

var MKR = doctorsVisit;

return MKR;

// Defne a function (2.) 
	function calculatePayment (doctorsFee, officeFee, MKR)

	var payment = ((doctorsFee + officeFee) - MKR);

	return payment;
	
// Define a function (3.) 
function calculate() {
		// Read values from the input fields

		var officeFee = 15.90;

		var lenght = Number(document.getElementById("lenght").value);
		var doctorsVisit = ""
		
		if (lenght<=10){
			doctorsVisit = 8.00;
		} 
		else if (lenght>10 & lenght <=20){
			doctorsVisit = 11.00;
		}
		else if (lenght>20 & lenght <=30){
			doctorsVisit = 13.50;
		}
		else if (lenght>30 & lenght <=45){
			doctorsVisit = 16.50;
		} 
		else{
			doctorsVisit = 21.00;
		}



		var doctorsFee = Number(document.getElementById("doctorsFee").value);
		// Call the function (1.) which calculates Kela reimbursement 
		var maximumKelaReimbursement = calculateMKR(doctorsVisit);
		// Call the function (2.) which calculates amount left for the customer to pay
		var finalPayment = calculatePayment(doctorsFee, officeFee, doctorsVisit);
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "Doctor's Fee is" + doctorsFee.toFixed(2) +" euros.<br>Kela reimbursement is " + maximumKelaReimbursement + " euros.<br>Office Fee is " + officeFee + " euros.<br>Customer needs to pay " + finalPayment + " euros."
}