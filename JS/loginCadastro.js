document.addEventListener("DOMContentLoaded", () => {
    const INPUTS = document.querySelectorAll(".input-login input");
    const openCad = document.querySelector(".cadastro");
    const openLog = document.querySelector(".login");
    
    const btnLog = document.querySelector(".cadastro-login");
    const btnCad = document.querySelector(".login-cadastro");

    INPUTS.forEach( element => {
        element.addEventListener("focus", (e) => {
            e.preventDefault();
            element.parentElement.classList.toggle("input-focus");
        });
        element.addEventListener("blur", (e) => {
            e.preventDefault();
            element.parentElement.classList.toggle("input-focus");
        });
    } );

    btnLog.addEventListener("click", (e) => {
        e.preventDefault();
        openCad.classList.toggle("cadastro-active");
        openLog.classList.toggle("login-active");
        document.querySelector("figure img").src = "../IMG/Artemis.png"
    });

    btnCad.addEventListener("click", (e) => {
        e.preventDefault();
        openCad.classList.toggle("cadastro-active");
        openLog.classList.toggle("login-active");
        document.querySelector("figure img").src = "../IMG/hefesto.png"
    });
});