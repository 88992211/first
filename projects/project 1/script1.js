const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});



document.querySelectorAll(".elem").forEach (function(elem){
  elem.addEventListener("mousemove",function(){
      
  })
});






function firstpageanim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      stagger: 0.2,
      delay: -1,
    })
    .from("#homefooter", {
      y: "10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay:-1,
    });
}
function circlemove() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mousemove",function(dets){
   gsap.to(elem.querySelector("img"),{
       opacity: 1,
       ease: power1,
     
   });
  });
  
});








firstpageanim();
circlemove();
