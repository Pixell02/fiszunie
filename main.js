// classify button and content
let btn = document.querySelector('.right-section-hamburgermenu')
let content = document.querySelector('.hamburger-menu')
// add content to button
btn.addEventListener ('click', function(){
content.classList.toggle('hamb-menu-opacity-1')
})

// Adding cards contents to observe

const cards = document.querySelectorAll('.about-project-container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('transition', entry.isIntersecting)
    });
});

cards.forEach(card => {
    observer.observe(card)
})