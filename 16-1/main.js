window.addEventListener('scroll', function(event){
        if(window.scrollY<=500){
            document.querySelector(".left-slide").style.width = `${window.scrollY + 100}px`;
            document.querySelectorAll("h2")[0].style.fontSize = `${(window.scrollY + 200)/10}px`;
            document.querySelectorAll("h2")[1].style.fontSize = `${(window.scrollY + 200)/10}px`;
            document.querySelector("img").style.marginRight = `${(window.scrollY + 200)/5}px`;
            console.log(window.scrollY);
        }else if(window.scrollY>500){
            document.querySelectorAll("h2")[1].style.fontSize = `${(100) - (window.scrollY/10)}px`;
        }
})
document.querySelectorAll('h2')[1].addEventListener('click', ()=> {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
document.querySelectorAll('h2')[0].addEventListener('click', ()=> {
    window.scroll({
        top: 500,
        behavior: 'smooth'
    })
})