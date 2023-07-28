const splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    pagination:false,
    type:'fade',
  } );
  
  splide.mount();


  const splide2 = new Splide( '#slider2', {
    rewind          : true,
    fixedWidth      : 200,
    fixedHeight     : 100,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
   })
   splide2.mount();


splide.sync(splide2);
splide.mount();
splide2.mount();

