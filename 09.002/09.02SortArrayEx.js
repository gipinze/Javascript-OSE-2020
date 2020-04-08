var array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];
var i;
var text= "";
function sortArray() {
// first sort the array
    array.sort();
//Then reverse 
    array.reverse();

for(i=0; i < array.length; i++)
text += (array[i]) + "<br>";

  //  console.log(array[i] + "\n");//
    // TODO
    document.getElementById("answer").innerHTML = text;
}