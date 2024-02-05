const openModalButton = document.querySelector("#abrir-modal");
const closeModalButton = document.querySelector("#fechar-modal");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) =>{
    el.addEventListener("click", () => toggleModal());
    console.log("funcionou")
});
