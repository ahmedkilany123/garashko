let listNav = document.querySelectorAll("header nav ul li");

listNav.forEach(function (el) {
  el.onclick = function () {
    listNav.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
  };
});

let srchIcon = document.getElementById("srchIcon");

srchIcon.onclick = function () {
  if (srchIcon.classList.contains("active")) {
    srchIcon.classList.remove("active");
    logBox.classList.remove("active");
  } else {
    srchIcon.classList.add("active");
    logBox.classList.remove("active");
  }
};

let login = document.getElementById("login");
let logBox = document.querySelector(".left .logBox");

login.onclick = function () {
  if (login.classList.contains("active")) {
    login.classList.remove("active");
    logBox.classList.remove("active");
  } else {
    login.classList.add("active");
    logBox.classList.add("active");
    srchIcon.classList.remove("active");
  }
};
