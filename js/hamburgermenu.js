const hamburger = document.querySelector(".hamburger");
const kismenu = document.querySelector(".kismenu");
hamburger.addEventListener("click", megnyit);
kismenu.addEventListener("click", bezar);
document.addEventListener("click", function (event) {
    if (!kismenu.contains(event.target) && !hamburger.contains(event.target)) {
        kismenu.classList.remove("lenyilt");
        hamburger.classList.remove("lenyilt");
    }
});
function megnyit() {
    kismenu.classList.toggle("lenyilt");
}
function bezar() {
    kismenu.classList.remove("lenyilt");
}