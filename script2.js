//1 task
const info = document.getElementById("info");
const infoUl = document.createElement("ul");
info.appendChild(infoUl);
const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];
for (const item of items) {
    const newItemList = document.createElement("li");
    newItemList.textContent = item;
    infoUl.append(newItemList);
}
// 2 task
const header = document.getElementById("header");
const aLink = document.createElement("a");
aLink.textContent = "Мой профиль в GitHub";
aLink.href = "https://github.com/talgatson";
aLink.target = "_blank";
header.appendChild(aLink);
// 3 task
const main = document.getElementById("main");
const section = document.createElement("section");
section.className = "dynamic";
const sectionH2 = document.createElement("h2");
sectionH2.textContent = "Обучение JavaScript";
const sectionP = document.createElement("p");
sectionP.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
section.appendChild(sectionH2);
section.appendChild(sectionP);
main.prepend(section);
// 4 task
const infoRemove = document.getElementById("info");
const paragraphRemove = infoRemove.querySelector("p");
infoRemove.removeChild(paragraphRemove);
// 5 taks
const removeFooter = document.getElementById("footer");
 while (removeFooter.hasChildNodes()) {
    removeFooter.removeChild(removeFooter.firstChild);
 }



