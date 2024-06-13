// Obtén todos los botones que activan el modal
var modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

// Para cada botón...
modalButtons.forEach(function(button) {
  // Agrega un evento que se activa cuando se hace clic en el botón
  button.addEventListener('click', function() {
    // Obtén la imagen dentro del botón
    var img = button.querySelector('img');
    
    // Cambia la imagen y el título del modal
    document.querySelector('#miModal img').src = img.src;
    document.querySelector('#miModal .modal-title').textContent = img.alt;
  });
});
