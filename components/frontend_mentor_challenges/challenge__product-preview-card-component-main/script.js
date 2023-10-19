window.addEventListener("load", function () {
  var img = document.getElementById("card-image");

  img.onload = function () {
    if (img.width > 300 || img.height > 200) {
      img.src = "large-image.jpg"; // Use a different image for larger dimensions
    }
  };

  img.src = "your-image.jpg"; // Set the initial image source
});
