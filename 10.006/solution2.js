var jsonText = '[' + '{ "number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready" },' 
+ '{ "number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless" },' 
+ '{ "number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions" }' + ']';

function listProducts() {
  // 1. Parse the JSON text into Javascript objects (3 Product objects in an array). See the hints in the task description.
  var productArray = JSON.parse(jsonText);
  var i;
  var outputText = "";
  // 2. Create the text to be displayed on the web page. See the hints in the task description.
  for (i = 0; i < productArray.length; i++) {
    outputText += "<br><br>Number: " + productArray[i].number + "<br>" + "Name: " + productArray[i].name + "<br>" + "Price: " + productArray[i].price.toFixed(2) + "<br>" + "Description: " + productArray[i].description;
  }
  // 3. Write the output text to the web page.
  document.getElementById("productList").innerHTML = outputText;
}