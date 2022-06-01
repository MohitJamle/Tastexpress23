var toggleNav = document.getElementById("toggleNav");
var navMenu = document.getElementById("navMenu");

var isShow = false;

function shown(params) {
  if (isShow) {
    navMenu.style.height = "auto";
  } else if (!isShow) {
    navMenu.style.height = "0";
  }
}

toggleNav.addEventListener("click", function () {
  isShow = !isShow;
  shown();
});
