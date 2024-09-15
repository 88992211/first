var container ="";
for (var i= 0; i<200; i++){
    var num =Math.floor(Math.random() * 100);

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

 container += `<div style="background-color:rgb(${red},${green},${blue});"
  class="w-20 h-20 rounded-full flex items-center justify-center bg-green-500">${num}</div>`;
}
document.querySelector(".bubbles").innerHTML = container;