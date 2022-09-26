//slider

// window.addEventListener(`resize`, event => {
//   if ((document.documentElement.clientWidth <= 391) || (document.documentElement.clientWidth >= 1440)) {
//     document.location.reload();
//   }
//   document.location.reload();
// }, false);

let curSlide = 2;
let curPos = 0;
let sliders = document.querySelectorAll(".swiper__item");

let leftBtn = document.querySelector(".swiper__arrow--left");
let rightBtn = document.querySelector(".swiper__arrow--right");
let bulls = document.querySelectorAll(".swiper__bullet");

let widthSlide = document.querySelector(".swiper__item").offsetWidth;
// console.log(widthSlide)

window.addEventListener(`resize`, event => {
  curPos = 0
  curSlide = 2
  let widthScreen = document.body.offsetWidth
  
  leftBtn.classList.remove('swiper__arrow--disabled')
  rightBtn.classList.remove('swiper__arrow--disabled')

  if (widthScreen <= 391) {
    curSlide = 1
    curPos = 371
    leftBtn.classList.add('swiper__arrow--disabled')
  }

  move()
}, false);


leftBtn.addEventListener('click', function () {
  let widthScreen = document.body.offsetWidth
  let size = document.querySelector(".swiper__item").offsetWidth;

  if (curSlide !== 1) {
    if (size <= 390) {
      curPos += size + 11;
    } else {
      curPos += size + 60;
    }
    curSlide--;
    move();
  }

  if (curSlide === 1) {
    leftBtn.classList.add('swiper__arrow--disabled')
  } else {
    rightBtn.classList.remove('swiper__arrow--disabled')
  }
});

rightBtn.addEventListener('click', function () {
  let widthScreen = document.body.offsetWidth
  let size = document.querySelector(".swiper__item").offsetWidth;

  if (curSlide !== 3) {
    if (size <= 390) {
      curPos -= size + 11;
    } else {
      curPos -= size + 60;
    }
    curSlide++;
    move();
  }

  if (curSlide === 3) {
    rightBtn.classList.add('swiper__arrow--disabled')
  } else {
    leftBtn.classList.remove('swiper__arrow--disabled')
  }
});

function move() {
  sliders.forEach(el => {
    el.style.transform = `translateX(${curPos}px)`;
  });

  bulls.forEach(el => {
    el.classList.remove("swiper__bullet--active");
  });
  bulls[curSlide - 1].classList.add("swiper__bullet--active");
}
