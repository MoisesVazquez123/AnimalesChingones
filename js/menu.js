window.addEventListener("DOMContentLoaded",()=>{

let imagenes = document.querySelectorAll(".image");

imagenes.forEach((imagen, index) => {

    imagen.addEventListener("mouseenter", () => {
        imagen.classList.add("grande");
    });

    imagen.addEventListener("mouseleave", () => {
        imagen.classList.remove("grande", "press");
    });

    imagen.addEventListener("click", () => {
        imagen.classList.add("press");
    });
});

})

function index(){
    window.location.href="../index.html";
}
function capibara(){
    window.location.href="capibara.html";
}
function huron(){
    window.location.href="huron.html";
}
function conejo(){
    window.location.href="conejo.html";
}
function pato(){
    window.location.href="pato.html";
}
function gato(){
    window.location.href="gato.html";
}
function bengala(){
    window.location.href="tigre.html";
}
function ornitorrinco(){
    window.location.href="ornitorrinco.html";
}
function ballena(){
    window.location.href="ballena.html";
}
function tiburones(){
    window.location.href="tiburones.html";
}
function elefante(){
    window.location.href="elefante.html";
}
function pulpo(){
    window.location.href="pulpo.html";
}
function delfin(){
    window.location.href="delfin.html";
}
function perezoso(){
    window.location.href="perezoso.html";
}
function abeja(){
    window.location.href="abeja.html";
}
function halcon(){
    window.location.href="halcon.html";
}
function ajolote(){
    window.location.href="ajolote.html";
}
function medusa(){
    window.location.href="medusa.html";
}
function tortuga(){
    window.location.href="tortuga.html";
}
function komodo(){
    window.location.href="komodo.html";
}
function humano(){
    window.location.href="humano.html";
}
document.getElementById('scroll-up').addEventListener('click', () => {
  window.scrollBy({ top: -10000, behavior: 'smooth' });
});

document.getElementById('scroll-down').addEventListener('click', () => {
  window.scrollBy({ top: 10000, behavior: 'smooth' });
});