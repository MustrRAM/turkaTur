const navSocial = document.querySelector('.nav__social');
const socialOpen = document.querySelector('.nav__button');

socialOpen.addEventListener('click', function(){
    navSocial.classList.add('socail--active');
    socialOpen.classList.add('hidden');
})

