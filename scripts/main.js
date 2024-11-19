const burgerBtn = document.querySelector('.burger_button');
const burger = document.querySelector('.burger');
let listImgSlider = document.querySelectorAll('.img_slider');
const btnRight = document.getElementById('button_right');
const sliderBlock = document.querySelector('.slider_block');
const btnLeft = document.getElementById('button_left');

burgerBtn.addEventListener('click', () =>{
    burger.classList.toggle('show_burger');
    burgerBtn.classList.toggle('transform');
})

btnRight.addEventListener('click',()=>{
    listImgSlider = document.querySelectorAll('.img_slider');
    const img = document.createElement('img');
    img.classList.add('img_slider');
    img.src = listImgSlider[0].src;
    sliderBlock.removeChild(listImgSlider[0]);
    sliderBlock.appendChild(img);
})
btnLeft.addEventListener('click',() =>{
    console.log(0)
    listImgSlider = document.querySelectorAll('.img_slider');
    const img = document.createElement('img');
    img.classList.add('img_slider');
    img.src = listImgSlider[listImgSlider.length-1].src;
    sliderBlock.removeChild(listImgSlider[listImgSlider.length-1]);
    sliderBlock.prepend(img);
})