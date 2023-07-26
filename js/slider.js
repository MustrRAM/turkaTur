const swiper1 = new Swiper(".swiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });