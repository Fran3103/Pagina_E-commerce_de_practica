const abrirMenu = document.querySelector('.menu_open');
const cerrarMenu= document.querySelector('.menu_close');
const aside = document.querySelector('aside');



abrirMenu.addEventListener('click', () =>
{
    aside.classList.add('aside_visible');
});


cerrarMenu.addEventListener('click', () =>{
    aside.classList.remove('aside_visible')
})
