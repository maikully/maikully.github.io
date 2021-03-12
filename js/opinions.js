
window.onload = function() {
  var liList = document.getElementById("album9.5").getElementsByTagName("li");
  let albumCount = liList.length
  albumCount += document.getElementById("album9").getElementsByTagName("li").length
  albumCount += document.getElementById("album8.5").getElementsByTagName("li").length
  albumCount += document.getElementById("album8").getElementsByTagName("li").length
  albumCount += document.getElementById("album7.5").getElementsByTagName("li").length
  albumCount += document.getElementById("album7").getElementsByTagName("li").length
  albumCount += document.getElementById("album6.5").getElementsByTagName("li").length
  albumCount += document.getElementById("album6").getElementsByTagName("li").length
  albumCount += document.getElementById("album5.5").getElementsByTagName("li").length
  albumCount += document.getElementById("album5").getElementsByTagName("li").length
  albumCount += document.getElementById("album4").getElementsByTagName("li").length
  albumCount += document.getElementById("album2").getElementsByTagName("li").length
  document.getElementById("albumCount").innerHTML = albumCount
}