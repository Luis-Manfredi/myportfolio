
//Get sidebar
var menu = document.getElementById('menu');
//Get appbar
var appbar = document.getElementById('appbar');

function openMenu(){
    // appbar.style.backgroundColor = 'transparent';
    menu.style.display = 'flex';
}

window.addEventListener('click', closeMenu)

function closeMenu(event){
    if(event.target.className === 'menubackground'){
        event.target.style = 'none';
        // appbar.style.backgroundColor = '#2b2d42';
    }
}