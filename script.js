const bordinha = document.querySelector('.bordinha')

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY
    if(scroll_position > 250){
        bordinha.style.backgroundColor = "white";
    }else{
        bordinha.style.backgroundColor = "black";
    }
})