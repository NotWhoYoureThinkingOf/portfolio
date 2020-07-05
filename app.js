
const projects = document.querySelectorAll('.projects-list .project')
const projectLink = document.querySelector('.project-link-active, .project-link-next, .project-link-prev');
const projectLinkNext = document.querySelector('.project-link-next');
const projectLinkPrev = document.querySelector('.project-link-prev');
const projectCaption = document.querySelector('.project-caption');
const projectCaptionNext = document.querySelector('.project-caption-next')
const projectCaptionPrev = document.querySelector('.project-caption-prev')
const projectTech = document.querySelector('.tech');
const projectTechNext = document.querySelector('.tech-next')
const projectTechPrev = document.querySelector('.tech-prev')
const currentProject = document.querySelector('.projects-list .active');
const nextProject = document.querySelector('.projects-list .next');
const thirdProject = document.querySelector('.projects-list .third')
const upArrow = document.querySelector('.up-arrow')
const downArrow = document.querySelector('.down-arrow')
const mainBg = document.querySelector('.main-bg')
const aboutBtn = document.querySelector('.about-btn')
const workBtn = document.querySelector('.about-links .links .work-btn')
const mainContactBtn = document.querySelector('.main-contact-btn')
const contactBtn = document.querySelector('.contact-btn')
const modal = document.querySelector('.contact-modal')
const form = document.querySelector('.contact-form')
const darkbg = document.querySelector('.dark-bg')
const submitBtn = document.querySelector('.submit')
const messageBox = document.querySelector('.message-box')
const menuBtn = document.querySelector('.mobile-menu')
const menuBg = document.querySelector('.main-bg .container .menu-bg')
const aboutMenuBg = document.querySelector('.about .menu-bg')
const aboutMenuBtn = document.querySelector('.about .mobile-menu')
const menuLinks = document.querySelector('.main-bg .container .menu-bg .menu-links')
const aboutMenuLinks = document.querySelector('.about .menu-bg .menu-links')
const blocks = document.querySelectorAll('.block')
const menuWork = document.querySelector('.main-bg .container .menu-bg .menu-links .link-container .work')
const menuAbout = document.querySelector('.main-bg .container .menu-bg .menu-links .link-container .about')
const menuContact = document.querySelector('.main-bg .container .menu-bg .menu-links .link-container .contact')
const aboutMenuWork = document.querySelector('.about .menu-bg .menu-links .link-container .work')
const aboutMenuAbout = document.querySelector('.about .menu-bg .menu-links .link-container .about')
const aboutMenuContact = document.querySelector('.about .menu-bg .menu-links .link-container .contact')

projectLink.addEventListener('mouseover', () => {
    projectCaption.style.opacity = '1'
    projectTech.style.opacity = '1'
})

projectLink.addEventListener('mouseleave', () => {
    projectCaption.style.opacity = '0'
    projectTech.style.opacity = '0'
})

projectLinkNext.addEventListener('mouseover', () => {
    projectCaptionNext.style.opacity = '1'
    projectTechNext.style.opacity = '1'
})

projectLinkNext.addEventListener('mouseleave', () => {
    projectCaptionNext.style.opacity = '0'
    projectTechNext.style.opacity = '0'
})

projectLinkPrev.addEventListener('mouseover', () => {
    projectCaptionPrev.style.opacity = '1'
    projectTechPrev.style.opacity = '1'
})

projectLinkPrev.addEventListener('mouseleave', () => {
    projectCaptionPrev.style.opacity = '0'
    projectTechPrev.style.opacity = '0'
})

upArrow.addEventListener('mousedown', () => {
    upArrow.style.transform = 'translateY(2px)'
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

// upArrow.addEventListener('mousedown', () => {
//     upArrow.style.transform = 'translateY(2px)'
//     projects.forEach((project) => {
//         if (project.classList.contains('active')) {
//             project.classList.remove('active')
//             project.classList.add('prev')
//         } else if (project.classList.contains('next')){
//             project.classList.remove('next')
//             project.classList.add('active')
//         } else if (project.classList.contains('prev')) {
//             project.classList.remove('prev')
//             project.classList.add('next')
//         }
//     })    
// })

upArrow.addEventListener('mouseup', () => {
    upArrow.style.transform = 'translateY(0px)'
})


downArrow.addEventListener('mousedown', () => {
    downArrow.style.transform = 'translateY(2px)'
    let count = 0;
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



// downArrow.addEventListener('mousedown', () => {
//     downArrow.style.transform = 'translateY(2px)'
//     let count = 0;
//     projects.forEach((project) => {
//         if(project.classList.contains('active')){
//             project.classList.remove('active')
//             project.classList.add('next')
//         } else if (project.classList.contains('next')){
//             project.classList.remove('next')
//             project.classList.add('prev')
//         } else if (project.classList.contains('prev')){
//             project.classList.remove('prev')
//             project.classList.add('active')
//         }
//     })    
// })

downArrow.addEventListener('mouseup', () => {
    downArrow.style.transform = 'translateY(0px)'
})

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    projects.forEach((project) => {
        project.style.pointerEvents = 'none';
    })
    mainBg.style.pointerEvents = 'none'; 
    mainBg.style.transform = 'translateY(-100%)'
    gsap.fromTo('.description', {x:0, opacity:0}, {x:400, duration:2, ease:'power2.out', opacity:1})
    // gsap.to('.description', {duration:2, x:400, delay: .5, ease: 'power2.out', opacity:1});
    // gsap.fromTo('.black-bg', {x:-1000, }, {x:-890, duration: 2})
    gsap.fromTo('.profile-pic', {opacity:0}, {opacity:1, duration:1.5})
    // gsap.to('.profile-pic', {opacity:1, duration:2})
    gsap.fromTo('.about-links',{y:400, opacity:0}, {y:0, duration:1.5, opacity:1})
})

workBtn.addEventListener('click', (e) => {
    e.preventDefault()
    projects.forEach((project) => {
        project.style.pointerEvents = 'auto';
    })
    mainBg.style.pointerEvents = 'auto'; 
    mainBg.style.transform = 'translateY(0%)'
    gsap.fromTo('.profile-pic', {opacity:1}, {opacity:0, duration:1})
    gsap.fromTo('.about-links', {y:0}, {y:400, duration:2, opacity:0})
    gsap.fromTo('.description', {opacity:1}, {opacity:0, duration:1.5})
    
})

contactBtn.addEventListener('click', () => {
    gsap.fromTo('.contact-modal', {pointerEvents:'none', opacity: 0}, {pointerEvents: 'auto', opacity: 1, duration:.5})
    gsap.fromTo('.contact-container', {y:100, opacity:0}, {y:0, opacity:1, duration:.5})
})

mainContactBtn.addEventListener('click', () => {
    gsap.fromTo('.contact-modal', {pointerEvents:'none', opacity: 0}, {pointerEvents: 'auto', opacity: 1, duration:.5})
    gsap.fromTo('.contact-container', {y:100, opacity: 0}, {y:0, opacity:1, duration:.5})
})

darkbg.addEventListener('click', () => {
    gsap.fromTo('.contact-modal', {opacity: 1, pointerEvents: 'auto' }, { opacity: 0, pointerEvents:'none', duration: .5 })
    gsap.to('.contact-container', {y:100, duration:.5})
    gsap.to('.message-box', {opacity:0, y:100, duration:.5})
})

submitBtn.addEventListener('click', () => {
    // gsap.fromTo('.contact-modal', {opacity: 1, pointerEvents: 'auto' }, { opacity: 0, pointerEvents:'none', duration: .5})
    gsap.fromTo('.contact-container', {y:0, opacity:1}, {y:100, opacity:0, duration:.5})
    gsap.fromTo('.message-box', {opacity:0, y: 100}, {opacity:1, y:0, duration:.5})
})


let menuCount = 0;
menuBtn.addEventListener('click', () => {
    gsap.to('.container .menu-bg .block', {width:'100%', duration:.2, stagger:.1})
    menuBg.style.pointerEvents = 'auto'
    menuLinks.style.pointerEvents = 'auto'
    gsap.to('.main-bg .menu-links', {opacity: 1, duration:1, delay:.7})
})

aboutMenuBtn.addEventListener('click', () => {
    gsap.to('.about .menu-bg .block', {width:'100%', duration:.2, stagger:.1})
    aboutMenuBg.style.pointerEvents = 'auto'
    aboutMenuLinks.style.pointerEvents = 'auto'
    gsap.to('.about .menu-bg .menu-links', {opacity: 1, duration:1, delay:.7})
})

menuWork.addEventListener('click', () => {
    gsap.to('.block', {width:'0%', duration:.2, delay:.3, stagger:.1})
    menuBg.style.pointerEvents = 'none'
    menuLinks.style.pointerEvents = 'none'
    gsap.to('.menu-links', {opacity: 0, duration:.7})
})

aboutMenuWork.addEventListener('click', () => {
    gsap.to('.about .menu-bg .block', {width:'0%', duration:.2, delay:.3, stagger:.1})
    aboutMenuBg.style.pointerEvents = 'none'
    aboutMenuLinks.style.pointerEvents = 'none'
    gsap.to('.about .menu-bg .menu-links', {opacity: 0, duration:.7})
    projects.forEach((project) => {
        project.style.pointerEvents = 'auto';
    })
    mainBg.style.pointerEvents = 'auto';
    gsap.to('.main-bg', {y:'0%', duration:1})
    gsap.fromTo('.description', {x:400, opacity:1}, {x:0, duration:2, ease:'power2.out', opacity:0, delay:0})
    gsap.fromTo('.profile-pic', {opacity:1}, {opacity:0, duration:1.5, delay:0})
    gsap.fromTo('.about-links',{y:0, opacity:1}, {y:400, duration:1.5, opacity:0})
})

menuAbout.addEventListener('click', () => {
    gsap.to('.block', {width:'0%', duration:.2, delay:.3, stagger:.1})
    menuBg.style.pointerEvents = 'none'
    menuLinks.style.pointerEvents = 'none'
    gsap.to('.menu-links', {opacity: 0, duration:.7})
    projects.forEach((project) => {
        project.style.pointerEvents = 'none';
    })
    mainBg.style.pointerEvents = 'none';
    gsap.to('.main-bg', {y:'-100%', duration:1, delay:.3})
    gsap.fromTo('.description', {x:0, opacity:0}, {x:400, duration:2, ease:'power2.out', opacity:1, delay:1.7})
    gsap.fromTo('.profile-pic', {opacity:0}, {opacity:1, duration:1.5, delay:2})
    gsap.fromTo('.about-links',{y:400, opacity:0}, {y:0, duration:1.5, opacity:1})
})

aboutMenuAbout.addEventListener('click', () => {
    gsap.to('.about .menu-bg .block', {width:'0%', duration:.2, stagger:.1})
    aboutMenuBg.style.pointerEvents = 'none'
    aboutMenuLinks.style.pointerEvents = 'none'
    gsap.to('.about .menu-bg .menu-links', {opacity: 0, duration:.7})
})

menuContact.addEventListener('click', () => {
    gsap.fromTo('.contact-modal', {pointerEvents:'none', opacity: 0}, {pointerEvents: 'auto', opacity: 1, duration:.5})
    gsap.fromTo('.contact-container', {y:100, opacity: 0}, {y:0, opacity:1, duration:.5})
})

aboutMenuContact.addEventListener('click', () => {
    gsap.fromTo('.contact-modal', {pointerEvents:'none', opacity: 0}, {pointerEvents: 'auto', opacity: 1, duration:.5})
    gsap.fromTo('.contact-container', {y:100, opacity: 0}, {y:0, opacity:1, duration:.5})
})


const mobileModeOn = () =>{
    if (window.innerWidth <= 768) {
        document.body.height = window.innerHeight;
    }
}

mobileModeOn();
window.addEventListener('resize', (e) =>{
    mobileModeOn();
})








