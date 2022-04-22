//Get modals
var modalsButtons = document.querySelectorAll('.cardTile');

modalsButtons.forEach(function(button){
  button.onclick = function(){
    var modal = button.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'flex';
  }
})

window.onclick = function(event){
  if(event.target.className === 'modal'){
    event.target.style = 'none';
  }
}