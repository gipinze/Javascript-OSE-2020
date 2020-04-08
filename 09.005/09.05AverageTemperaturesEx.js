// Create an array of twelve average temperatures
var temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,16.3, 11.5, 6.6, 1.6, -2.0];
var month;
var i=0;
var text ="";
function loopTemperatures() {
    // For loop
  for (month=1; month<13; month++) {
    text += (temperatures[i]).toFixed(1) + "<br>";
    i++ 
  }
  document.getElementById("answer").innerHTML= text + "</br>"
}   
       
  