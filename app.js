
const projects = document.querySelectorAll('.projects-list .project')
const projectLink = document.querySelector('.project-link');
const projectCaption = document.querySelector('.project-caption');
const currentProject = document.querySelector('.projects-list .active');
const nextProject = document.querySelector('.projects-list .next');
const thirdProject = document.querySelector('.projects-list .third')
const upArrow = document.querySelector('.up-arrow')
const downArrow = document.querySelector('.down-arrow')
const mainBg = document.querySelector('.main-bg')
const aboutBtn = document.querySelector('.about-btn')

projectLink.addEventListener('mouseover', () => {
    projectCaption.style.opacity = '1'
})

projectLink.addEventListener('mouseleave', () => {
    projectCaption.style.opacity = '0'
})

upArrow.addEventListener('mousedown', () => {
    upArrow.style.transform = 'translateY(2px)'
    projects.forEach((project) => {
        if (project.classList.contains('active')) {
            project.classList.remove('active')
            project.classList.add('prev')
        } else if (project.classList.contains('next')){
            project.classList.remove('next')
            project.classList.add('active')
        } else if (project.classList.contains('prev')) {
            project.classList.remove('prev')
            project.classList.add('next')
        }
    })    
})

upArrow.addEventListener('mouseup', () => {
    upArrow.style.transform = 'translateY(0px)'
})


downArrow.addEventListener('mousedown', () => {
    downArrow.style.transform = 'translateY(2px)'
    let count = 0;
    projects.forEach((project) => {
        if(project.classList.contains('active')){
            project.classList.remove('active')
            project.classList.add('next')
        } else if (project.classList.contains('next')){
            project.classList.remove('next')
            project.classList.add('prev')
        } else if (project.classList.contains('prev')){
            project.classList.remove('prev')
            project.classList.add('active')
        }
    })    
})

downArrow.addEventListener('mouseup', () => {
    downArrow.style.transform = 'translateY(0px)'
})

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    mainBg.style.transform = 'translateY(-100%)'
})

