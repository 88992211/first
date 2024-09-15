
 var first = document.querySelectorAll("h1");

  first.forEach((text)=>{
   var firsttext =  text.textContent
   // console.log(firsttext);
 var splittedtext=firsttext.split(' ');
//  console.log(splittedtext);
 var clutter='';
 splittedtext.forEach(function(e){
    clutter+=`<span>${e}</span>`;
 })

// console.log(clutter);
 text.innerHTML=clutter;  
 })

 


gsap.from("h1 span",{
 y:100,
 duration:.5,
 delay:1,
 opacity:0,
 stagger:.5,
})

// var first = document.querySelectorAll("h1");
// var firsttext = first.textContent;
// var splittedtext = firsttext.split("") ;
// var clutter='';
// splittedtext.forEach(function(e){
//    clutter+=`<span>${e}</span>`;

// })
// console.log(first);


// first.innerHTML=clutter;



// gsap.from("h1 span",{
// y:100,
// duration:.5,
// delay:1,
// opacity:0,
// stagger:.5,
// })
 
