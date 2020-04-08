var x = document.getElementById("conversion");

function convertTemperature(a, b) {
    if (b === "fahrenheit") {  
        return (a * 1.8) + 32;
    } else {
        return (a - 32) * 5 / 9;
    }
}
function convert() {
    var targetTemp = document.getElementById("conversion").value; 
    var inputTemp = Number(document.getElementById("temperature").value);
    console.log(targetTemp);
    console.log(inputTemp);
    var resultTemperature = convertTemperature(inputTemp, targetTemp)
    console.log(resultTemperature);
    document.getElementById("result").value = resultTemperature.toFixed();
}