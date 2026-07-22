const themeBtn = document.getElementById("toggle-theme-btn");
const profileCard = document.getElementById("profile-card");

themeBtn.addEventListener("click", function () {
    profileCard.classList.toggle("dark-theme");
});

const addBtn = document.getElementById("add-skill-btn");
const input = document.getElementById("skill-input");
const skillsList = document.getElementById("skills-list");

addBtn.addEventListener("click", function () {
    const skill = input.value.trim();

    if (skill !== "") {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
        input.value = "";
    }
});