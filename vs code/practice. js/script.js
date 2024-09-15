// var main =document.querySelector(".main")
// var on =document.querySelector(".on")
// var off =document.querySelector(".off")


// on.addEventListener("click",function(){
//     main.classList.add("bg-pink-500")
// })

// off.addEventListener("click",function(){
//     main.classList.remove("bg-pink-500")
// })

var overlay = document.querySelector(".overlay")
var close = document.querySelector(".close")
var showmodal = document.querySelector(".showmodal")


showmodal.addEventListener("click",function(){
    overlay.classList.remove ("hidden");
})

close.addEventListener("click",function(){
    overlay.classList.add("hidden")
})