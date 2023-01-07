const menuHeader = document.getElementById("menu-header");
const botaoMenu = document.getElementById("botao-menu");

botaoMenu.addEventListener("click" ,(evento)=>{
    menuHeader.classList.toggle("menu-header-ativo");
})
