let menu = document.getElementById("menu")
let menu2 = document.querySelector('.menu2')
let cross = document.getElementById("cross")

menu.addEventListener('click', () => {
    menu2.classList.add("active");
})
cross.addEventListener('click', () => {
    menu2.classList.remove("active");
})
