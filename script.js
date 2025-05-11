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





