const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next__btn');
const prevBtn = document.querySelector('.prev__btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide__icon');
const numeroSlides = slides.length;
var slideNumero = 0;

// Con el boton de siguiente se remueve el active a todas las slides luego el numero de slide aumentara 
// Luego segun la slide en numero le pondra la clase active
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })

    slideNumero++;

    if(slideNumero > (numeroSlides - 1)){
        slideNumero = 0;
    }

    slides[slideNumero].classList.add('active');
    slideIcons[slideNumero].classList.add('active');

})

// Igual a la funcion del boton siguiente pero en lugar de sumar resta
prevBtn.addEventListener('click', () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })
    slideNumero--;

    if(slideNumero < 0){
        slideNumero = numeroSlides - 1;
    }

    slides[slideNumero].classList.add('active');
    slideIcons[slideNumero].classList.add('active');

})

// Hace lo mismo que la funcion del boton siguiente, pero lo realiza cada cierto tiempo
var autoSlider;
var automatico = () =>{
    autoSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        })
        slideNumero++;
    
        if(slideNumero > (numeroSlides - 1)){
            slideNumero = 0;
        }
    
        slides[slideNumero].classList.add('active');
        slideIcons[slideNumero].classList.add('active');
    }, 5000)
}

automatico();

// Con el mouse sobre el tiempo se pasa reiniciando y nunca avanza el slider
slider.addEventListener('mouseover', () => {
    clearInterval(autoSlider);
})

// Al mouse salir se inicia la cuenta de nuevo
slider.addEventListener('mouseout', () =>{
    automatico();
})
