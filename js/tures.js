const navSocial = document.querySelector('.nav__social');
const socialOpen = document.querySelector('.nav__button');

socialOpen.addEventListener('click', function(){
    navSocial.classList.add('socail--active');
    socialOpen.classList.add('hidden');
})



const socialButton = document.querySelector('.social__button');
const socialBox = document.querySelector('.social__box');

socialButton.addEventListener('click', function(){
    socialBox.classList.add('active');
    socialButton.classList.add('hidden');
})