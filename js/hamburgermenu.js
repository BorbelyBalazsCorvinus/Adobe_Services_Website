let hamburger = document.querySelector(".hamburger");
let kismenu = document.querySelector(".kismenu");
hamburger.addEventListener("click", megnyit);
document.addEventListener("click", function (elem) {
    if (!hamburger.contains(elem.target)) {
        bezar();
    }
});
function megnyit() {
    kismenu.classList.toggle("lenyilt");
}
function bezar() {
    kismenu.classList.remove("lenyilt");
}