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
});



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('#animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


  