var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var left = document.querySelector(".left");
var next = document.querySelector(".next");
var audio =document.querySelector(".audio");


play.addEventListener("click", function(){
    audio.play();
    pause.classList.remove("hidden");
    play.classList.add("hidden");
});

pause.addEventListener("click", function(){
    audio.pause();
    pause.classList.remove("hidden");
    play.classList.add("hidden");
});
left.addEventListener("click", function(){
    playhandle();
})
next.addEventListener("click", function(){
    playhandle();
})
