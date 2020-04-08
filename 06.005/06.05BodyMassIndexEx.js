function calculateBMI() {

  var weight = document.getElementById("weight").value;
  var weightnumber = Number(weight);
  var height = document.getElementById("height").value;
  var heightnumber = Number(height);
  var BMI = (weightnumber / (heightnumber/100 * heightnumber/100)).toFixed(2);

  if ( BMI <= 18.4 ) {
    var answer = "Body Mass Index (BMI) is " + BMI + " (Weight less than normal weight)"
  } 
  else if (BMI >= 18.5 && BMI <= 24.90 ){
    var answer = "Body Mass Index (BMI) is " + BMI + " (Normal weight)"
  } 
  else {
    var answer = "Body Mass Index (BMI) is " + BMI +  " (Overweight)"
  }
  document.getElementById("answer").innerHTML = answer;
}
