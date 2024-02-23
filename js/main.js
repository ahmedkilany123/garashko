
let listNav = document.querySelectorAll("header nav ul li");

listNav.forEach(function(el) {

    el.onclick = function () {

        listNav.forEach (function(el)  {
            el.classList.remove("active");
        });
        this.classList.add("active");
    }
});

let srchIcon = document.getElementById("srchIcon");

srchIcon.onclick = function () {
    if (srchIcon.classList.contains("active") ) {
        srchIcon.classList.remove("active");
    } else {
    srchIcon.classList.add("active");
    }
}


let login = document.getElementById("login");

login.onclick = function () {
    if (login.classList.contains("active") ) {
        login.classList.remove("active");
    } else {
    login.classList.add("active");
    }
}