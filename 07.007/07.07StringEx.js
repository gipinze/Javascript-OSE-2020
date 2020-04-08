function processName() {

    // read value of name from the input field
    var name = document.getElementById("name").value;

    // show it with "ALL CAPS" using toUpperCase()
   
    var cap = name.toUpperCase();
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + cap;
    // show it with  "all small letters" using toLowerCase()
 
    var lower = name.toLowerCase();
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lower;
    //tell how many characters are there (length, includes also all spaces) 
    
    var length = name.length;
    document.getElementById("length").innerHTML = "Character count: " + length;

    // tell, whether the input string contains the word 'muumi'

    var muumi = name.indexOf("muumi");
    if (muumi >= 0){
        var exist = "Does contain the text muumi.";
    } else if (muumi < 0){
        var exist = "Doesn't contain the text muumi.";
    }
    document.getElementById("contains").innerHTML = exist;

    // tell the first character using charAt()
        
    document.getElementById("firstCharacter").innerHTML = "First character: " + name.charAt(0);

    // tell which ones are the first three characters using subStr().

    document.getElementById("manyCharacters").innerHTML = "First three characters: " + name.substr(0, 3);
}