// Create an array with file names of images
var images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];
var text ="";

function addImages() {
  // Use a for loop to show all the images. 
  for (var i=0; i<images.lenght; i++) {
  }
// Use the document.write() method to write one new image element to the web page per each image.
	document.write("<img src =" + images [i] + " alt= 'Funny shape'>");
}
