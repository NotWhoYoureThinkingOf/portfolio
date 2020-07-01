"use strict";

var projects = document.querySelectorAll('.projects-list .project');
var projectLink = document.querySelector('.project-link-active, .project-link-next, .project-link-prev');
var projectLinkNext = document.querySelector('.project-link-next');
var projectCaption = document.querySelector('.project-caption');
var projectCaptionNext = document.querySelector('.project-caption-next');
var currentProject = document.querySelector('.projects-list .active');
var nextProject = document.querySelector('.projects-list .next');
var thirdProject = document.querySelector('.projects-list .third');
var upArrow = document.querySelector('.up-arrow');
var downArrow = document.querySelector('.down-arrow');
var mainBg = document.querySelector('.main-bg');
var aboutBtn = document.querySelector('.about-btn');
var workBtn = document.querySelector('.about-links .links .work-btn');
projectLink.addEventListener('mouseover', function () {
  projectCaption.style.opacity = '1';
});
projectLink.addEventListener('mouseleave', function () {
  projectCaption.style.opacity = '0';
});
projectLinkNext.addEventListener('mouseover', function () {
  projectCaptionNext.style.opacity = '1';
});
projectLinkNext.addEventListener('mouseleave', function () {
  projectCaptionNext.style.opacity = '0';
});
upArrow.addEventListener('mousedown', function () {
  upArrow.style.transform = 'translateY(2px)';
  projects.forEach(function (project) {
    if (project.classList.contains('active')) {
      project.classList.remove('active');
      project.classList.add('prev');
    } else if (project.classList.contains('next')) {
      project.classList.remove('next');
      project.classList.add('active');
    } else if (project.classList.contains('prev')) {
      project.classList.remove('prev');
      project.classList.add('next');
    }
  });
});
upArrow.addEventListener('mouseup', function () {
  upArrow.style.transform = 'translateY(0px)';
});
downArrow.addEventListener('mousedown', function () {
  downArrow.style.transform = 'translateY(2px)';
  var count = 0;
  projects.forEach(function (project) {
    if (project.classList.contains('active')) {
      project.classList.remove('active');
      project.classList.add('next');
    } else if (project.classList.contains('next')) {
      project.classList.remove('next');
      project.classList.add('prev');
    } else if (project.classList.contains('prev')) {
      project.classList.remove('prev');
      project.classList.add('active');
    }
  });
});
downArrow.addEventListener('mouseup', function () {
  downArrow.style.transform = 'translateY(0px)';
});
aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  projects.forEach(function (project) {
    project.style.pointerEvents = 'none';
  });
  mainBg.style.pointerEvents = 'none';
  mainBg.style.transform = 'translateY(-100%)';
  gsap.fromTo('.description', {
    x: 0,
    opacity: 0
  }, {
    x: 400,
    duration: 2,
    ease: 'power2.out',
    opacity: 1
  }); // gsap.to('.description', {duration:2, x:400, delay: .5, ease: 'power2.out', opacity:1});
  // gsap.fromTo('.black-bg', {x:-1000, }, {x:-890, duration: 2})

  gsap.fromTo('.profile-pic', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5
  }); // gsap.to('.profile-pic', {opacity:1, duration:2})

  gsap.fromTo('.about-links', {
    y: 400,
    opacity: 0
  }, {
    y: 0,
    duration: 1.5,
    opacity: 1
  });
});
workBtn.addEventListener('click', function (e) {
  e.preventDefault();
  projects.forEach(function (project) {
    project.style.pointerEvents = 'auto';
  });
  mainBg.style.pointerEvents = 'auto';
  mainBg.style.transform = 'translateY(0%)';
  gsap.fromTo('.profile-pic', {
    opacity: 1
  }, {
    opacity: 0,
    duration: 1
  });
  gsap.fromTo('.about-links', {
    y: 0
  }, {
    y: 400,
    duration: 2,
    opacity: 0
  });
  gsap.fromTo('.description', {
    opacity: 1
  }, {
    opacity: 0,
    duration: 1.5
  });
});