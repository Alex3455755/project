const burgerBtn = document.querySelector('.burger_button');
const burger = document.querySelector('.burger');
burgerBtn.addEventListener('click', () =>{
    burger.classList.toggle('show_burger');
    burgerBtn.classList.toggle('transform');
})

