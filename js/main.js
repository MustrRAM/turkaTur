// Кнопки бургера (открыть закрыть)

const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');
const noScroll = document.querySelector('body');
const wrapperBlur = document.querySelector('.wrapper');
 

menuOpen.addEventListener('click', function() {
    menu.classList.add('menu--active');
    noScroll.classList.add('body--active');
    wrapperBlur.classList.add('wrapper--active');
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('menu--active');
    noScroll.classList.remove('body--active');
    wrapperBlur.classList.remove('wrapper--active');
});


// Закрытие бургера по клику на свободное пространство

window.onclick = function(event){
    let target = event.target 

    if (target === wrapperBlur){
        menu.classList.remove('menu--active');
        noScroll.classList.remove('body--active');
        wrapperBlur.classList.remove('wrapper--active');
    }
}


// Закрытие бургера при переходе по ссылке

const menuList = document.querySelectorAll('.menu__list');
for(item of menuList){
    item.addEventListener('click',function(item){
        menu.classList.remove('menu--active');
        noScroll.classList.remove('body--active');
        wrapperBlur.classList.remove('wrapper--active');    
    });
}




// Кнопка соц сетей

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


// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks){
    smoothLink.addEventListener('click', function(element){
        element.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior:'smooth',
            block:'start'
        });
    });
}


  
//  Добавляю класс Header при скролле 

const header = document.querySelector('header');
window.addEventListener('scroll', function(){
    if (window.scrollY > 100 ){
        header.classList.add('header--active')
    } else{
        header.classList.remove('header--active')
    }
});