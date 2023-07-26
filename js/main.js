const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');
const noScroll = document.querySelector('body');
const mainBlur = document.querySelector('.main')
 

menuOpen.addEventListener('click', function() {
    menu.classList.add('menu--active');
    logo.classList.add('logo--active');
    noScroll.classList.add('body--active');
    mainBlur.classList.add('main--active');
})

menuClose.addEventListener('click', function() {
    menu.classList.remove('menu--active');
    logo.classList.remove('logo--active');
    noScroll.classList.remove('body--active');
    mainBlur.classList.remove('main--active');
})

mainBlur.addEventListener('click', function(){
    menu.classList.remove('menu--active');
    mainBlur.classList.remove('main--active');
    noScroll.classList.remove('body--active');
    logo.classList.remove('logo--active');
})


const navSocial = document.querySelector('.nav__social');
const socialOpen = document.querySelector('.nav__button');
const topButton = document.querySelector('.top__button')
const topSocial = document.querySelector('.top__social')
socialOpen.addEventListener('click', function(){
    navSocial.classList.add('socail--active')
    socialOpen.classList.add('hidden')
})

topButton.addEventListener('click', function(){
    topSocial.classList.add('social--active');
    topButton.classList.add('hidden');
});



let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('#animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


  