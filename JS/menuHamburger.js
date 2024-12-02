document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelector(".menu-items");

    menuIcon.addEventListener("click", (e) => {
        e.preventDefault();
        menuItems.classList.toggle("menu-active");
    });
});