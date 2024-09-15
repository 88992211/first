var display = document.getElementById('display');
function appendToDisplay(value){
    if(display.innerHTML === '0'){
        display.innerHTML = value;
    }else{
        display.innerHTML += value;
    }
}
function clearDisplay(){
    display.innerHTML = '0';
}
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}