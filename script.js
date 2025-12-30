const btnJugar = document.getElementById("btn-jugar");
const pantallaInicial = document.getElementById("pantalla-inicial");
const pantallaNegra = document.getElementById("pantalla-negra");
btnJugar.addEventListener("click", () => {
pantallaInicial.classList.add("oculto");
setTimeout(() => {
pantallaNegra.classList.remove("oculto");
}, 2000);
});
