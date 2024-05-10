//Configuracao do menu======================================
function menuShow() {
  const menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
}

//ANIMAÇAO DA PAGINA =========================================

const elements = document.querySelectorAll("[data-anima]");
const anamacaoClass = "animacao";

//faz a animacao
function animaScroll() {
  const topPageWin = window.pageYOffset + (window.innerHeight * 3) / 4;
  elements.forEach(function (elemento) {
    if (topPageWin > elemento.offsetTop) {
      elemento.classList.add(anamacaoClass);
    } else {
      elemento.classList.remove(anamacaoClass);
    }
  });
}

if (elements.length) {
  window.addEventListener("scroll", function () {
    animaScroll();
  });
}
//VALIDACAO DO CONTATO=========================================
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

//envio do formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

//validacao do username
function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    //mostra menssagem de erro
    errorInput(username, "Preencha com um nome");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

//validacao do email
function checkInputEmail() {
  const emailValue = email.value;
  //validacoes
  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

//envia a mensagem de erro
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("p");
  textMessage.innerText = message;

  formItem.className = "form-content error";
}

//verifica se nao existe nenhum erro no formulario
function checkForm() {
  checkInputUsername();
  checkInputEmail();

  const formItem = form.querySelectorAll(".form-content");
  const isValid = [...formItem].every((item) => {
    return item.className === "form-content";
  });
  if (isValid) {
  }
}

// Carrossel animacao =========================================>
  const initSlider = (sliderId) => {
    const slideButtons = document.querySelectorAll(`#${sliderId} .slide-button`);
    const imageList = document.querySelector(`#${sliderId} .image-list`);
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const sliderScrollbar = document.querySelector(`#${sliderId} .slider-scrollbar`);
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (event) => {
      const startX = event.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
  
      // Update thumb position on move mouse
      const handleThumbMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        // Limit thumb position
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
  
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };
  
      // Remove event listeners on mouse up
      const handlerMouseUp = () => {
        document.removeEventListener("mousemove", handleThumbMove);
        document.removeEventListener("mouseup", handlerMouseUp);
      };
  
      document.addEventListener("mousemove", handleThumbMove);
      document.addEventListener("mouseup", handlerMouseUp);
    });
  
    // Slide images according to the button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === `${sliderId}-prev-slide` ? -1 : 1;
        console.log("Direção:", direction); // Adiciona um log para verificar a direção
    
        const scrollAmount = direction * (imageList.clientWidth / 2); // Ajusta o valor do deslocamento conforme a direção
        console.log("Quantidade de Deslocamento:", scrollAmount); // Adiciona um log para verificar a quantidade de deslocamento
    
        const currentScrollLeft = imageList.scrollLeft;
        console.log("Scroll Atual:", currentScrollLeft); // Adiciona um log para verificar o scroll atual
    
        const newScrollLeft = currentScrollLeft + scrollAmount;
        console.log("Novo Scroll:", newScrollLeft); // Adiciona um log para verificar o novo scroll
    
        // Verifica se o novo deslocamento está dentro dos limites
        const boundedScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));
        console.log("Scroll Limitado:", boundedScrollLeft); // Adiciona um log para verificar o scroll limitado
    
        // Realiza a rolagem suave para a nova posição
        imageList.scrollTo({ left: boundedScrollLeft, behavior: "smooth" });
      });
    });
    

    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };
  
    // Atualiza a posição do thumb do scrollbar
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };
  
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });
  };
  
  window.addEventListener("load", () => {
    initSlider("projetos");
  });
  

// MEDIA MOBILE ==============================================>
function responsive() {
  const moveImg = document.querySelector(".flexivel");
}
