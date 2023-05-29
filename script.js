AOS.init();


// $(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop()> 1600){
//             $('.pageup').fadeIn();
//         }else{
//             $('.pageup').fadeOut();
//         }    
//     });

//     $("a[href^=#up]").click(function(){
//         const _href = $(this).attr("href");
//         $("html,body").animate({scrollTop:$(_href).offset().top+"px"});
//         return false;
//     });
//  });
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



// // gsap.from('.navbar-brand',{duration:3,opacity:0})
// // gsap.from('.title',{y:100,duration:2,delay:0.6,opacity:0})
// gsap.from('.nav-item ',{duration:3,opacity:0,stagger:1}) 
// // gsap.from('.button',{scale:1.7,duration:3,repeat:-1})
// gsap.from('.img-about',{x:500,duration:2,delay:0.8,opacity:0})
// gsap.from('.img-wrapper-info',{x:500,duration:2,delay:0.8,opacity:0})
// gsap.from('.img-wrapper-info-two',{x:-500,duration:2,delay:0.8,opacity:0})
// gsap.from('.img-wrapper-info-three',{x:500,duration:2,delay:0.8,opacity:0})
