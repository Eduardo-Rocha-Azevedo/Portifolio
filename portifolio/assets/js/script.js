//Configuracao do menu======================================
function menuShow(){  
    const menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="assets/img/menu_white_36dp.svg"; 
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }

}


//ANIMAÇAO DA PAGINA =========================================

const elements = document.querySelectorAll('[data-anima]');
const anamacaoClass = 'animacao';

//faz a animacao
function animaScroll(){
    const topPageWin= window.pageYOffset+((window.innerHeight*3)/4);
    elements.forEach(function(elemento){
        if(topPageWin > elemento.offsetTop){
            elemento.classList.add(anamacaoClass);
        }else{
            elemento.classList.remove(anamacaoClass);
        }
    });
}

if(elements.length) {
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}

// MEDIA MOBILE ==============================================>
    function responsive(){
        const moveImg = document.querySelector('.flexivel');
        
    }