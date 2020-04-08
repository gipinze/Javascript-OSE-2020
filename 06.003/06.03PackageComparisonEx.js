function comparePackages() {

		// assign input field values into a variables
		var textmessages = document.getElementById("textMessages").value;
		var textnumber = Number(textmessages);
		var calltime = document.getElementById("callTime").value;
		var callnumber = Number(calltime);
		// calculate the costs of the Special Package
		var specialpackage = (((textnumber + callnumber)*0.069) + 19.90).toFixed(2);
		var allinclusive = 29.90;
		// If the Special package is cheaper than the All-inclusive package 
		if (specialpackage < allinclusive){
			var result = "The Special package (" + specialpackage + ") is cheaper than the All-inclusive package (29.90)"
		}
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
		else {
			var result = "The All-inclusive package (29.90) is cheaper than the Special package (" + specialpackage + ")"
		}
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
		// write the answer to the web page DOM, in the answer div, as the content
		document.getElementById("answer").innerHTML = result;
}