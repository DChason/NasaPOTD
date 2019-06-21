var url = "https://api.nasa.gov/planetary/apod?api_key={YOUR_API_KEY}";

$.ajax({
  url: url,
  success: function(results) {
    if ("copyright" in results) {
      $("#copyright").text("Image Credits: " + results.copyright);
    } else {
      $("#copyright").text("Image Credits: " + "Public Domain");
    }

    if (results.media_type == "video") {
      $("#image").css("display", "none");
      $("#vid").attr("src", results.url);
    } else {
      $("#vid").css("display", "none");
      $("#image").attr("src", results.url);
    }

    $("#explanation").text(results.explanation);
    $("#title").text(results.title);
    $("#imageHD").attr("src", results.hdurl);
  }
});
