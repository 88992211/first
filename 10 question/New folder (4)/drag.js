var draggable = document.querySelectorAll(".draggable")
var container = document.querySelectorAll(".container")


draggable.forEach(function(elem){
elem.addEventListener("dragstart",function(e){
console.log("dragstart");
elem.classList.add("dragging")
})

elem.addEventListener("dragend",function(e){
    elem.classList.remove("dragging")
})
})
console.log(container);


container.forEach(function(element){
    element.addEventListener("dragover",function(e){
        e.preventDefault()
        console.log("drag over");
        var drag = document.querySelector(".dragging")
        element.appendChild(drag)
    })
})