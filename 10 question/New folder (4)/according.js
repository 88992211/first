var headers = document.querySelector('.accordion-header');
headers.addEventListener('click',function(){
    headers.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            }
})