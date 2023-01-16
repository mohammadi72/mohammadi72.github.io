// navBar
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("navlist").style.top = "40px";
  } else {
    document.getElementById("navlist").style.top = "-100px";
  }
}
// **************************************************************************************
function showElement(evt, element) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(element).style.display = "flex";
  document.getElementById(element).style.justifyContent = "space-between";
  evt.currentTarget.className += " active";
}
