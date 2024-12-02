let scrollcontainer=document.querySelector(".collections");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

collections=document.addEventListener("wheel",(evt)=>{
evt.preventDefault();
scrollcontainer.Left += evt.deltaY;
scrollcontainer.style.scrollbehavior="auto";

});

nextBtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollbehavior ="smooth";
    scrollcontainer.scrollLeft +=900;
});

backBtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollbehavior ="smooth";
    scrollcontainer.scrollLeft -=900;
});


