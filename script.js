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
   