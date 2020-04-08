function addImages() {

    var images = [];
    images.push("https://myy.haaga-helia.fi/~swd1ta001/kuvat/face.png");
    images.push("https://myy.haaga-helia.fi/~swd1ta001/kuvat/heart.png");
    images.push("https://myy.haaga-helia.fi/~swd1ta001/kuvat/sun.png");
    images.push("https://myy.haaga-helia.fi/~swd1ta001/kuvat/moon.png");
    images.push("https://myy.haaga-helia.fi/~swd1ta001/kuvat/cloud.png");

    for (i = 0; images.length > i; i++)
    {
      var img = new Image(100, 100);
      img.src = images[i];

      var src = document.getElementById("elementid");
      src.appendChild(img);
    }

  }