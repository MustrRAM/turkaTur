const splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    pagination:false,
    type:'fade',
    autoplay:{
      speed:10,
    }
  });
  splide.mount();




// Слайдеры секции "tures"

// 1 слайдер

 const splide2 = new Splide( '#slider2', {
  type:'fade',
  pagination:false,
 })
 splide2.mount();

// 2 слайдер

const splide3 = new Splide( '#slider3', {
  type:'fade',
  pagination:false,
})
splide3.mount();

// 3 слайдер
const splide4 =  new Splide( '#slider4', {
  type:'fade',
  pagination:false,
})

splide4.mount();


