function tellInfractionFine() {
		var data1 = document.getElementById("drivingSpeed").value;
		var drivingspeed =Number(data1);
		var data2 = document.getElementById("speedLimit").value;
		var speedlimit = Number(data2);
		var excess = (drivingspeed - speedlimit);

		if ((speedlimit >= 10 && speedlimit<= 60) && (excess <= 15)) {
				var result = "Infraction fine is 85 euros."
		} else if ((speedlimit >= 10 && speedlimit<= 60) && (excess > 15)) {
			var result = "Infraction fine is 115 euros."
		} else if ((speedlimit >= 61 && speedlimit <= 120) && (excess <= 15)) {
			var result = "Infraction fine is 70 euros."
		} else if ((speedlimit >= 61 && speedlimit <= 120) && (excess > 15)){
			var result = "Infraction fine is 100 euros."
		} else if ((speedlimit + 20 < drivingspeed)){
			var result = "Infraction fine based on Päiväsakko"
		} else {
			var result = "No speeding, no fine"
		}
		document.getElementById("answer").innerHTML = result;
		// TODO
}


         
