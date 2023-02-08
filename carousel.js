

const carousels = document.querySelectorAll(".images-carousel-items");

const prevSlides= document.querySelectorAll(".left-slide");
const nextSlides= document.querySelectorAll(".right-slide");
const totalSlides=3; 
let index=0;

nextSlides.forEach(nextSlide=>{
    nextSlide.addEventListener("click", ()=>{
        next("next");
    });
})

prevSlides.forEach(prevSlide=>{
    prevSlide.addEventListener("click", ()=>{
        next("prev");
    })
})


function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index== 0){
            index= totalSlides -1;
        }
        else{
            index--;
        }

    }

    carousels.forEach(carousel=>{
        const slides= carousel.children;
        console.log(slides)
        for(i=0; i<slides.length; i++){
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
    })
}