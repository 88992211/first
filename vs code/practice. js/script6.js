
var box = document.querySelector('#box')
var btn = document.querySelector('#btn')

 
 var flag = 0 ;


btn.addEventListener("click",function(){
   if(flag == 0){
    box.style.backgroundColor = "red"
    btn.innerHTML = "frinds";
    console.log("changed");
    flag = 1;
}else{
    box.style.backgroundColor = "black"
    btn.innerHTML = "remove";
    console.log("not changed");
    flag = 0;
}

 })
