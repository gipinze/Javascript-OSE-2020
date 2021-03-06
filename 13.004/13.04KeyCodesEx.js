// Function returns the four digit key codes between min-max 
function generateKeyCode(min, max) {
    var length; 
    var leadingZeroCount;
    // Randomize the key code with Math.random() function
    var keyCode = Math.round((Math.random() * max) + min);  
    // Convert a number to a string with the toString() method.
    // Use the length property of the text string.
    leadingZeroCount = 4 - keyCode.toString().length; 
    // Add leading zeros to keyCode, if needed (eg. 9 -> 0009)
    // with loop
    for (var j = 1; j <= leadingZeroCount; j++) { 
        keyCode = "0" + keyCode;  
    }  
    // Return four digit key code as a text
    return keyCode.toString();  
}


// For hundred times
function makeList() {
    var output = "";
    var i;
// Call generateKeyCode() function 
    for (i = 1; i < 101; i++) {
    // If ordinal number of the keyCode MODULO (%) 10 equals zero
        if (i % 10 === 0) {
        output +=  generateKeyCode(1, 9999) + "<br>";
        } else {
        output +=  generateKeyCode(1, 9999) + " ";    
        }
    }
    return output;
    }
    console.log(makeList());
    // Print key code to the document
// document.write(makeList());
var keyCodes = makeList();
        // Print html line break to the document
//Show result in html page (div with id value "keycodes")
document.getElementById("keycodes").innerHTML = keyCodes;

