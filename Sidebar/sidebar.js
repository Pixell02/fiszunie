// classify button and content
let btn = document.querySelector('.right-section-hamburgermenu')
let content = document.querySelector('.hamburger-menu')
// add content to button
btn.addEventListener ('click', function(){
content.classList.toggle('hamb-menu-opacity-1')
})
