let arrowsDown = document.querySelectorAll('.faq-toggle')
for(let i= 0; i<arrowsDown.length; i++){
    arrowsDown[i].addEventListener('click', ()=>{
        arrowsDown[i].parentElement.classList.toggle('active')
    })
}