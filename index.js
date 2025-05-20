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
    window.location.href="../html/capibara.html";
}
function huron(){
    window.location.href="../html/huron.html";
}
function conejo(){
    window.location.href="../html/conejo.html";
}
function pato(){
    window.location.href="../html/pato.html";
}
function gato(){
    window.location.href="../html/gato.html";
}
function bengala(){
    window.location.href="../html/tigre.html";
}
function ornitorrinco(){
    window.location.href="../html/ornitorrinco.html";
}
function ballena(){
    window.location.href="../html/ballena.html";
}
function tiburones(){
    window.location.href="../html/tiburones.html";
}
function elefante(){
    window.location.href="../html/elefante.html";
}
function pulpo(){
    window.location.href="../html/pulpo.html";
}
function delfin(){
    window.location.href="../html/delfin.html";
}
function perezoso(){
    window.location.href="../html/perezoso.html";
}
function abeja(){
    window.location.href="../html/abeja.html";
}
function halcon(){
    window.location.href="../html/halcon.html";
}
function ajolote(){
    window.location.href="../html/ajolote.html";
}
function medusa(){
    window.location.href="../html/medusa.html";
}
function tortuga(){
    window.location.href="../html/tortuga.html";
}
function komodo(){
    window.location.href="../html/komodo.html";
}
function humano(){
    window.location.href="../html/humano.html";
}
document.getElementById('scroll-up').addEventListener('click', () => {
  window.scrollBy({ top: -10000, behavior: 'smooth' });
});

document.getElementById('scroll-down').addEventListener('click', () => {
  window.scrollBy({ top: 10000, behavior: 'smooth' });
});