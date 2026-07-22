
document.getElementById("toggle-theme-btn").addEventListener("click", function () {
    document.getElementById("profile-card").classList.toggle("dark-theme");
});


document.getElementById("add-skill-btn").addEventListener("click", function () {

    let skill = document.getElementById("skill-input").value;

    if (skill.trim() != "") {

        let li = document.createElement("li");
        li.innerText = skill;

        document.getElementById("skills-list").appendChild(li);

        document.getElementById("skill-input").value = "";
    }

});