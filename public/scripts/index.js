const projectDetails = document.querySelectorAll("#project-details-slide>div");

projectDetails.forEach((el)=> { 
    el.addEventListener("mouseover", ()=>{ 
        fadeUpShow(el.querySelector(".project-details-link"));
        fadeUpHide(el.querySelector(".project-details-title"));
    });

    el.addEventListener("mouseout", ()=>{
        removeFadeUpShow(el.querySelector(".project-details-link"));
        removeFadeUpHide(el.querySelector(".project-details-title"));
    });


} )


function fadeUpShow(el){

    if(!el.classList.contains("animate-fadeupshow")){
        el.classList.add("animate-fadeupshow");
    }
}

function removeFadeUpShow(el){
    if(el.classList.contains("animate-fadeupshow")){
        el.classList.remove("animate-fadeupshow");
    }
}

function fadeUpHide(el){
    if(!el.classList.contains("animate-fadeuphide")){
        el.classList.add("animate-fadeuphide");
    }
}

function removeFadeUpHide(el){
    if(el.classList.contains("animate-fadeuphide")){
        el.classList.remove("animate-fadeuphide");
    }
}