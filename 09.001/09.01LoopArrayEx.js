var array = ["Pekka", "Minna", "Heikki", "Anna", "Jukka", "Iida"];
var i;
var text = "";

function loopArray() {
    // TODO
    for (i=0; i < array.length; i++) {
        text += (array[i]) + "<br>";
    }
    document.getElementById("answer").innerHTML= text
}