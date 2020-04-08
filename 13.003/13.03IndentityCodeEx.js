function show() {
    // Read value of identity number from the input field
    var id = document.getElementById("identityNumber").value;
    // Check gender
    // Get the second last character with charAt() method 
    var secondLastChar = id.charAt(id.length - 2);
    // Convert digit text to number with parseInt() function
    var value = parseInt(secondLastChar);
    // Check gender with modulo (%) operation (even number-> female, odd number-> male)
    if (value % 2 == 0) {
        outPut1 = "Female";
    }
    else {
        outPut1 = "Male";
    }
    // Parse birth day information
    var id;
    // Take certain characters (dd, mm, yy and separator character)) from the string with subString() method 
    var dateStr = id.substring(0, 2);
    var monthStr = id.substring(2, 4);
    var yearStr = id.substring(4, 6);
    var separator = id.charAt(6);
    // Calculate the year with four digits
    if (separator == "+") {
        var year = "18" + yearStr;
    }
    else if (separator == "-") {
        var year = "19" + yearStr;
    }
    else {
        var year = "20" + yearStr;
    }
    // Concatenate birth day text
    var outPut2 = "born " + dateStr + "." + monthStr + "." + year;
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = "<p>"+ outPut1 + ", " + outPut2 +".";
}