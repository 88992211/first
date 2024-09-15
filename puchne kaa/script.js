var line = document.querySelector(".line")
var word = document.querySelector(".h2")
var btn = document.querySelector(".btn")

var grow = 0
btn.addEventListener("click",function(){
  var interval =  setInterval(function(){
      grow ++
      word.innerHTML= grow + "%";
      line.style.width = grow + "px"
      
    },30)

    setTimeout(function(){
      clearInterval(interval)
      btn.innerHTML = finish

    },3000)
})