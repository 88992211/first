// var inputbox= document.querySelector(".inputbox")
// var listcontainer = document.querySelector(".listcontainer")

// function addTask(){
//     if(inputbox.value === ''){
//         alert("You must write something")
//     }
//     else{
//         var li = document.createElement("li");
//         li.innerHTML=inputbox.value;
//         listcontainer.appendChild(li);
//         var span = document.createElement("span")
//         span.innerHTML=`<i class="ri-close-fill"></i>`
//         li.appendChild(span)
//     }
//     inputbox.value="";
// }
// listcontainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//        e.target.classList.toggle("checked")
//        console.log("hey");
//     }
//     else if(e.target.tagName === "SPAN"){
//      e.target.parentElement.remove() 
//     }
// },false)
// this is my code :-
var inputbox = document.querySelector(".inputbox");
var listcontainer = document.querySelector(".listcontainer");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = `<i class="ri-close-fill"></i>`;
        li.appendChild(span);
    }
    inputbox.value = "";
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "I") {
        e.target.closest("li").remove();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
