//redimencionar links navbar
const inicio = document.querySelector("inicio");
const aigreja = document.querySelector("aigreja");
const bemvindoacasa = document.querySelector("bemvindoacasa");
const siteoficial = document.querySelector("siteoficial");

function clickInicio() {
  window.location.href = "index.html";
  console.log("chamou a função clique inicio")
}

function clickaIgreja() {
  window.location.href = "https://ccvideira.com.br/a-igreja/";
  console.log("chamou a função clique a igreja")
}

function clickbemVindoaCasa() {
  window.location.href = "https://ccvideira.churchcenter.com/people/forms/118585";
  console.log("chamou a função clique bem vindo")
}

function clicksiteOficial() {
  window.location.href = "https://ccvideira.com.br/";
}

inicio.addEventListener('click', clickInicio);
aigreja.addEventListener('click', clickaIgreja);
bemvindoacasa.addEventListener('click', clickbemVindoaCasa);
siteoficial.addEventListener('click', clicksiteOficial);



// window.addEventListener('scroll', slideCards);

// toogle menu responsivo 
// const nav = document.querySelector(".nav");
// const btnMenu = document.querySelector(".btn-menu");
// const menu = document.querySelector(".menu");

// function handleButtonClick(event) {
//   if (event.type === "touchstart") event.preventDefault();
//   event.stopPropagation();
//   nav.classList.toggle("active");
//   handleClickOutside(menu, () => {
//     nav.classList.remove("active");
//     setAria();
//   });
//   setAria();
// }

// function handleClickOutside(targetElement, callback) {
//   const html = document.documentElement;
//   function handleHTMLClick(event) {
//     if (!targetElement.contains(event.target)) {
//       targetElement.removeAttribute("data-target");
//       html.removeEventListener("click", handleHTMLClick);
//       html.removeEventListener("touchstart", handleHTMLClick);
//       callback();
//     }
//   }
//   if (!targetElement.hasAttribute("data-target")) {
//     html.addEventListener("click", handleHTMLClick);
//     html.addEventListener("touchstart", handleHTMLClick);
//     targetElement.setAttribute("data-target", "");
//   }
// }

// function setAria() {
//   const isActive = nav.classList.contains("active");
//   btnMenu.setAttribute("aria-expanded", isActive);
//   if (isActive) {
//     btnMenu.setAttribute("aria-label", "Fechar Menu");
//   } else {
//     btnMenu.setAttribute("aria-label", "Abrir Menu");
//   }
// }

// btnMenu.addEventListener("click", handleButtonClick);
// btnMenu.addEventListener("touchstart", handleButtonClick);