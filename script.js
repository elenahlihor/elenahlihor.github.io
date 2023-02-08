// RESPONSIVE NAVBAR
const navbar= document.querySelector(".navbar");
const navToggle= document.querySelector(".mobile-toggle-nav");

navToggle.addEventListener("click", ()=>{
    const visibility= navbar.getAttribute("data-visible");
    if(visibility === "false"){
        navbar.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded","true")
    }else{
        navbar.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded","false")
    }

})


// TOGGLE THEME
const darkModeToggle = document.querySelector("#checkbox");
console.log(darkModeToggle['checked']);


 const enableDarkMode = ()=>{
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode');
 }

 const enableLightMode = ()=>{
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
 }

 darkModeToggle.addEventListener("change" , () =>{
    if(darkModeToggle['checked']){
        enableDarkMode();
    }
    else{
        enableLightMode();
    }
});

// PROJECTS
// OPEN/CLOSE the project's modals
const open_project01 = document.querySelector('.project_01');
const open_project02 = document.querySelector('.project_02');
const open_project03 = document.querySelector('.project_03');
const open_project04 = document.querySelector('.project_04');

const modal_container_project01 = document.querySelector('.modal-container.modal_container_project01');
const modal_container_project02 = document.querySelector('.modal-container.modal_container_project02');
const modal_container_project03 = document.querySelector('.modal-container.modal_container_project03');
const modal_container_project04 = document.querySelector('.modal-container.modal_container_project04');

const close_the_project01 = document.querySelector('.close_the_project01');
const close_the_project02 = document.querySelector('.close_the_project02');
const close_the_project03 = document.querySelector('.close_the_project03');
const close_the_project04 = document.querySelector('.close_the_project04');

// project1
open_project01.addEventListener("click", ()=>{
    modal_container_project01.classList.add("show");
});

close_the_project01.addEventListener("click", ()=>{
    modal_container_project01.classList.remove("show")
});

// project2
open_project02.addEventListener("click", ()=>{
    modal_container_project02.classList.add("show");
});

close_the_project02.addEventListener("click", ()=>{
    modal_container_project02.classList.remove("show")
});
// project3
open_project03.addEventListener("click", ()=>{
    modal_container_project03.classList.add("show");
});

close_the_project03.addEventListener("click", ()=>{
    modal_container_project03.classList.remove("show")
});

// project4
open_project04.addEventListener("click", ()=>{
    modal_container_project04.classList.add("show");
});

close_the_project04.addEventListener("click", ()=>{
    modal_container_project04.classList.remove("show")
});

