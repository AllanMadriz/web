// Ejecuta cuando el documento ha sido cargado
window.onload = function () {
  let loader = document.querySelector(".loader__container");
  setTimeout(() => {
    loader.classList.add("hide");
    loader.style.display = "none";
    document.querySelector("body").style.overflow = "initial";
  }, 500);
};
