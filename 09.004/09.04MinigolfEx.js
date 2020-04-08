// Create an array with minigolf results of eight players 
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];
var winner, biggestResult, lastIndex;
function showResults() {
    // Sort the array
 minigolf.sort()  
    // Assign the smallest result of to a variable
  winner = minigolf[0]; 
    // Assign the index of last array item to an variable

    // Assign the biggest result to a variable
    
biggestResult = minigolf.slice(-1);
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = "The smallest result is " + winner + " (winner). <br>" + " The biggest result is " + biggestResult + "."
}