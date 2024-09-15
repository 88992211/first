const quizData = [{
    question: "Which of the following is a client site language?",
    a1: "Java",
    a2: "C",
    a3: "Python",
    a4: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a1: "Hypertext Markup Language",
    a2: "Cascading Style Sheet",
    a3: "Jason Object Notation",
    a4: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a1: "1996",
    a2: "1995",
    a3: "1994",
    a4: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a1: "Hypertext Markup Language",
    a2: "Cascading Style Sheet",
    a3: "Jason Object Notation",
    a4: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];



var alloption = document.querySelectorAll(".option")
var label = document.querySelectorAll("label")
let allInputs = document.querySelectorAll("input[type='radio']")


var index=0;
var right = 0;
var incorrect = 0;
var total = quizData.length
function showQuestion(){
    var question = document.querySelector(".question")
  if(index === total){
return lastpage()
  }
var data = quizData[index]

question.innerHTML = `${data.question}`
label[0].innerText = data.a1
label[1].innerText = data.a2
label[2].innerText = data.a3
label[3].innerText = data.a4
console.log(right);

}
showQuestion()


document.querySelector("#next").addEventListener("click",function(){
var data = quizData[index]
var ans;
allInputs.forEach(function(elem){
   console.log(elem.checked);
    if(elem.checked){
        ans=elem.value
    
    }
})

if (ans === data.correct) {
    right++;
} else {
    incorrect++;
}
index++

showQuestion();
   
})





function lastpage(){

document.querySelector(".container").innerHTML=`
<div class="last">
<h3>Hiii you have scored ${total-incorrect}/${total}</h3>
</div>`

}
showQuestion(index);