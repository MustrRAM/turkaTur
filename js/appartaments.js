const navSocial = document.querySelector('.nav__social');
const socialOpen = document.querySelector('.nav__button');
const topButton = document.querySelector('.top__button');
const topSocial = document.querySelector('.top__social');

socialOpen.addEventListener('click', function(){
    navSocial.classList.add('socail--active');
    socialOpen.classList.add('hidden');
})

topButton.addEventListener('click', function(){
    topSocial.classList.add('social--active');
    topButton.classList.add('hidden');
});

