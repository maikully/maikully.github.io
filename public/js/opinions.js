
window.onload = function() {
  var liList = document.getElementById("album").getElementsByTagName("li");
  let albumCount = liList.length
  document.getElementById("albumCount").innerHTML = albumCount
}