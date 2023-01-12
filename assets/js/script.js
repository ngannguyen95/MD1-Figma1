// Handle show navbar
let iconMenuOpen = document.getElementsByClassName("nav-menu-mobile")
let iconMenuClose = document.getElementsByClassName("nav-menu-mobile-close")
let navMenu = document.getElementsByClassName("nav-menu")
console.log(navMenu[0])

iconMenuOpen[0].addEventListener("click", function () {
    navMenu[0].classList.add("show")
})
iconMenuClose[0].addEventListener("click", function () {
    navMenu[0].classList.remove("show")
})
// Handle show navbar