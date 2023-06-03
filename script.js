AOS.init();



// стрелка вверх

 window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.pageup');
    scroll.classList.toggle('move', window.scrollY>500)
})

function scrollUp () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}

// изменение фона у хедера при прокрутке

const headerChange = document.querySelector('#header');
window.addEventListener('scroll',() => {    
    if(window.scrollY >= 54) {
        headerChange.classList.add('header-bg');
    }  else{
        headerChange.classList.remove('header-bg');
    }
})


