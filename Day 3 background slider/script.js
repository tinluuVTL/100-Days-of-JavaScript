const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


let activeSlide= 0;
rightBtn.addEventListener('click',() =>{
    activeSlide++;
    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }
    // slides.forEach(slide => {
    //     slide.classList.remove('active');
    // });
    // slides[activeSlide].classList.add('active');

    setBgToBody()
    setActivesSlide()

})
lefttBtn.addEventListener('click',() =>{
    activeSlide--;
    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }
    // slides.forEach(slide => {
    //     slide.classList.remove('active');
    // });
    // slides[activeSlide].classList.add('active');

    setBgToBody()
    setActivesSlide()

})
setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActivesSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[activeSlide].classList.add('active');
}