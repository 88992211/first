function locomotivesetup() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function loader(){
  var growthing = document.querySelector("#loader");
  var growth = document.querySelector("#growth");

  var grow = 0;
  var interval = setInterval(function () {
    grow++;
    growth.style.width = grow + "%";
  }, 20);

var growthing = document.querySelector("#loader");
var growth = document.querySelector("#growth");

var grow = 0;
var interval = setInterval(function () {
  grow++;
  growth.style.width = grow + "%";
}, 30);

var tl = gsap.timeline()
tl.to("#loader img",{
  rotate:60,
  duration:4,
})
tl.to("#loader",{
  marginTop:"-100%",

})

setTimeout(function(){
  clearInterva(interval)
})



document.querySelector("#main")
document.querySelector("form")
document.querySelector("#div-form")
document.querySelector("#form input")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var user = input.value;
  localStorage.setItem("username", user);
  formDiv.style.display = "none";
  main.style.display = "initial";
});
}

gsap.from("page1 h1",{
  duration:2,
  rotate:60,
})