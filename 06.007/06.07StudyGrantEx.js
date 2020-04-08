function showStudyGrant() {

	var age = document.getElementById("age").value;
	var numberage = Number(age);
	var living = document.getElementById("withParents").value;    
	if (numberage >= 20 && living === "n") {
		var answer = "The study grant is 335.20 euros."
	} else if (numberage >= 20 && living === "y") {
		var answer = "The study grant is 136.70 euros."
	} else {
		var answer = "Ask Kela."
	}
	document.getElementById("answer").innerHTML = answer;
}
	