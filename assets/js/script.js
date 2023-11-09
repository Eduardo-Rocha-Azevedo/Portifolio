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
//VALIDACAO DO CONTATO=========================================
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

//envio do formulario
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkForm();
    
})

email.addEventListener("blur",()=>{
    checkInputEmail();
});

username.addEventListener("blur",()=>{
    checkInputUsername();
})

//validacao do username
function checkInputUsername(){
    const usernameValue = username.value;
    
    if(usernameValue === ""){
        //mostra menssagem de erro
        errorInput(username,"Preencha com um nome");

    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

//validacao do email
function checkInputEmail(){
    const emailValue = email.value;
    //validacoes
    if(emailValue === ""){
        errorInput(email,"O email é obrigatório.");
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

//envia a mensagem de erro
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p");
    textMessage.innerText = message;

    formItem.className = "form-content error";
}

//verifica se nao existe nenhum erro no formulario
function checkForm(){
    checkInputUsername();
    checkInputEmail();

    const formItem = form.querySelectorAll(".form-content")
    const isValid = [...formItem].every( (item) => {
        return item.className === "form-content";
    });
    if(isValid){
    
    }
   

}

// MEDIA MOBILE ==============================================>
    function responsive(){
        const moveImg = document.querySelector('.flexivel');
        
    }