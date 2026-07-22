let themeBtn = document.getElementById("toggle-theme-btn");
let card = document.getElementById("profile-card");

themeBtn.addEventListener("click", function () {
    card.classList.toggle("dark-theme");
});

let addBtn = document.getElementById("add-skill-btn");
let input = document.getElementById("skill-input");
let list = document.getElementById("skills-list");

addBtn.addEventListener("click", function () {

    if (input.value.trim() != "") {

        let li = document.createElement("li");
        li.innerText = input.value;

        list.appendChild(li);

        input.value = "";
    }

});