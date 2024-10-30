window.addEventListener("load", function () {
  // 티겟 스와이퍼
  var besttSwiper = new Swiper(".bestSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: { slidesPerView: 3.5 },
      800: { slidesPerView: 2 },
      600: { slidesPerView: 2, spaceBetween: 20 },
    },
    on: {
      loop: true,
    },
  });
  // 티겟 스와이퍼
  var targetSwiper = new Swiper(".targetSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
    },
    on: {
      loop: true, // 루프 활성화
    },
    breakpoints: { 1200: { slidesPerView: 3.5 }, 700: { slidesPerView: 3 } },
  });
  var petgetSwiper = new Swiper(".petSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
    },
    on: {
      loop: true, // 루프 활성화
    },
    breakpoints: { 1200: { slidesPerView: 3.5 }, 700: { slidesPerView: 3 } },
  });
});
