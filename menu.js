const hamburguesa = document.querySelector ('.hamburguesa'),
    menu= document.querySelector('.menu_navegacion');

    hamburguesa.addEventListener('click',()=>{
        menu.classList.toggle('spread');
    })

    window.addEventListener('click',e =>{
        if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa){
            menu.classList.toggle('spread');
        }
    })