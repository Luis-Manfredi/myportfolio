//Get AppBar
var appbar = document.getElementById('appbar');

//Get body
var body = document.body;

//Get sections
var about = document.getElementById('about');
var work = document.getElementById('work');
var contact = document.getElementById('contact');

//Get viewport
var vh = window.innerHeight;
var vw = window.innerWidth;

window.addEventListener('scroll', checkScroll);
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < vh - revealPoint){
            reveals[i].classList.add('active');
        }
        else{   
            reveals[i].classList.remove('active');
        }
    }
}

var prevScroll = window.scrollY;
function checkScroll(){
    const currentScroll = window.scrollY;

    if (prevScroll > currentScroll){
        appbar.style.top = '0'
    }
    else{
        appbar.style.top = '-80px';
    }

    prevScroll = currentScroll;

    if (currentScroll == 0){
        console.log('appbar is on top');
        appbar.style.boxShadow = 'none';
    }
    else{
        appbar.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.2)';
    }
}