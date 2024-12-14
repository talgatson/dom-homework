// 1 task
document.title = "Sautkali Aidyn";
// 2 task
const header = document.getElementById("header");
const siteTitle = document.querySelector(".site-title");
siteTitle.textContent = "Изучение JavaScript";
// 3 task
const menuLink = document.querySelectorAll(".menu-link");
//console.log(menuLink);
// 4 taks
const featuresList = document.querySelectorAll(".features-list li");
const boldLi = featuresList[1].innerHTML = "Поддержка <b>API</b>";

