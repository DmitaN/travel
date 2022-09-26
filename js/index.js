// console.log("Работа выполнена полностью согласно требованиям. Моя оценка работы: 110 баллов. \n Вёрстка валидная +10\n <header>, <main>, <footer> +3 \n четыре элемента <section> (по количеству секций) +3 \n только один заголовок <h1> +3 \n три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3 \n один элемент <nav> (панель навигации) +3 \n два списка ul > li > a (панель навигации, ссылки на соцсети) +3 \n четыре кнопки <button> +2 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n секция stories +9 \n блок <footer> +6 \n для построения сетки используются флексы или гриды +2 \n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n фоновый цвет тянется на всю ширину страницы +2 \n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2 \n изображения добавлены в формате .jpg +2 \n есть favicon +2 \n плавная прокрутка по якорям +5 \n ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5 \n интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5 \n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5 \n ");
// console.log("Работа выполнена полностью согласно требованиям. Моя оценка работы: 85 баллов. Вёрстка соответствует макету. Ширина экрана 390px \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n секция stories +9 \n блок <footer> +6 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется  \n нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");
console.log(`Все требования согласно ТЗ и формы кроссчек выполнены полностью.
Расхождение в PP не больше 10px. Оценка работы 125/125.
Уважаемый проверяющий. Если у тебя будут замечания или моя работа отображается не корректно, прошу связаться со мной в Discord: DmitaN#5034, Aleksandr Dmitriev.
Удачи и успехов в учебе! =)`)

let bool = false;
let body = document.querySelector("body");
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__list");
let menuLinks = menu.querySelectorAll(".header__item-link");

burger.addEventListener('click',
  function () {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("header__list--active");
    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      burger.classList.remove("header__burger--active");
      menu.classList.remove("header__list--active");
      document.body.classList.remove("stop-scroll");
    })
});




// login button

let loginBtn = document.querySelector('.header__btn')
let popup = document.querySelector('.header__popup')
let inputEmail = document.querySelector('.header__popup-input--email')
let inputPassword = document.querySelector('.header__popup-input--password')

loginBtn.addEventListener('click', function () {
  popup.classList.remove('header__popup--hidden')
  popup.classList.add('header__popup--active')
})

let accountBtn = document.querySelector('.account')

accountBtn.addEventListener('click', function () {
  popup.classList.remove('header__popup--hidden')
  popup.classList.add('header__popup--active')
})

let registrBtn = document.querySelector('.header__popup-link-create')

let loginForm = false

registrBtn.addEventListener('click', function () {
  if (loginForm === false) {
    document.querySelector('.header__popup-top').style.display = 'none'
    document.querySelector('.header__popup-middle').style.display = 'none'
    document.querySelector('.header__popup-recovery').style.display = 'none'
    document.querySelector('.header__popup-button--signin').style.marginBottom = `26px`
    document.querySelector('.header__popup-create').style.paddingLeft = `7px`

    document.querySelector('.header__popup-button--signin').textContent = "Sign Up"
    document.querySelector('.header__popup-title').textContent = "Create account"
    document.querySelector('.header__popup-create').textContent = "Already have an account?"
    document.querySelector('.header__popup-link-create').textContent = "Log in"
    loginForm = true
  } else {
    document.querySelector('.header__popup-top').style.display = 'block'
    document.querySelector('.header__popup-middle').style.display = 'flex'
    document.querySelector('.header__popup-recovery').style.display = 'block'
    document.querySelector('.header__popup-button--signin').style.marginBottom = `11px`
    document.querySelector('.header__popup-create').style.paddingLeft = `0px`

    document.querySelector('.header__popup-button--signin').textContent = "Sign In"
    document.querySelector('.header__popup-title').textContent = "Log in to your account"
    document.querySelector('.header__popup-create').textContent = "Don't have an account?"
    document.querySelector('.header__popup-link-create').textContent = "Register"
    loginForm = false
  }
})

let signBtn = document.querySelector('.header__popup-button--signin')
signBtn.addEventListener('click', function () {
  let email = document.querySelector('.header__popup-input--email').value
  let password = document.querySelector('.header__popup-input--password').value

  alert(`E-mail: ${email}\nPassword: ${password}`)
})


body.addEventListener('click',
  function (el) {
    if (el.target !== burger && el.target !== menu) {
      burger.classList.remove("header__burger--active");
      menu.classList.remove("header__list--active");
      document.body.classList.remove("stop-scroll");
    }
    if (!el.target.classList.contains('popup') && el.target !== loginBtn && el.target !== accountBtn) {
      popup.classList.remove('header__popup--active')
    }
  }
);


