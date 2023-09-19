const menuButton = document.getElementById("menu-button");
const hiddenMenu = document.getElementById("hidden-menu");

menuButton.addEventListener("click", () => {
    if (hiddenMenu.style.display === "block") {
        hiddenMenu.style.display = "none";
    } else {
        hiddenMenu.style.display = "block";
    }
});