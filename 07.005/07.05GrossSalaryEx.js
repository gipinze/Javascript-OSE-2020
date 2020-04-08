function calculateSalary(hours, hourlySalary) {
		// calculate salary
		var grossSalary = hours * hourlySalary
		// return the gross salary with the return statement
		return grossSalary;
}

function showGrossSalary() {
		// assign the input field value to the variable hours
		var Inputhours = Number(document.getElementById("hours").value);
		// assign the second input field value to the variable hourlySalary
		var InputhourlySalary = Number(document.getElementById("hourlySalary").value);
		// call the calculateSalary function
		var resultToShow = calculateSalary (Inputhours, InputhourlySalary);
		// write the answer on the html page
if (isNaN(InputhourlySalary)){
	alert("Salary must be a number!");
}
else if (isNaN(Inputhours)){
	alert("Hours must be a number!");
}
else{
	alert ("How´dy Kiitos!");
}
document.getElementById("answer").innerHTML="Gross Salary " + resultToShow.toFixed("2") + " euros.";
}

