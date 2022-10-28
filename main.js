const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const aboutProject = entry.target.querySelector('.about-project-container');
        const title = entry.target.querySelector('.title');
        if (entry.isIntersecting) {
            
            aboutProject.classList.add('transition');
            
            return;
        }
        aboutProject.classList.remove('transition');
        

    });
});

observer.observe(document.querySelector('.project-cont'));
