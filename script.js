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

// .nextButton {
//     font-size: 30px;
//     font-weight: 100;
//     height: fit-content;
//     padding: 10px 23px;
//     border-radius: 50%;
//     border: none;
//     background-color: white;
//     box-shadow: 1px 4px 15px 1px #d6d6d6;
//     cursor: pointer;
//     position: absolute;
//     right: 10px;
//     top: 42%;
//   }
