var index=0;

var owlDot = document.getElementById("owl-dots");
var owlDots = owlDot.getElementsByTagName("button");

var owlStageOuter = document.getElementById("owl-stage-outer");
var owlStageOuters = document.getElementsByTagName("img");

var owlPrev = document.getElementById("owl-prev")
var owlNext = document.getElementById("owl-next")

var container = [...owlDots];

function changeSlide(index){
    clearAll_owlStageOuters();
    active_owlDots(index);
    owlStageOuters[index].style.display = "block";
};

container.forEach(item=>{
    item.addEventListener("click", () => {
        index = container.indexOf(item);
        changeSlide(index);
    });
});

function clearAll_owlStageOuters(){
   for(var i=0; i<owlStageOuters.length; i++){
       owlStageOuters[i].style.display = "none";
   }
};

function active_owlDots(index){
    for(var i=0; i<owlDots.length; i++){
        if(owlDots[i].classList.contains("active")){
            owlDots[i].classList.remove("active")
        }
    }
    owlDots[index].classList.add("active");
};

owlPrev.addEventListener("click", function(){
    if(index == 0){
        index = owlStageOuters.length-1;
    }
    else{
        index--;
    }
    changeSlide(index);
});

owlNext.addEventListener("click", function(){
    if(index == owlStageOuters.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeSlide(index);
});

function nextSlide(){
    if(index == owlStageOuters.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeSlide(index);
 }

 function resetTimer(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer=setInterval(autoPlay,4000);
}

let timer=setInterval(nextSlide, 4000);