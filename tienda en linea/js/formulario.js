const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_8flyl7m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Enviar';
      alert('Mensaje Enviado Correctamente!');
    }, (err) => {
      btn.textContent = 'Enviar';
      alert(JSON.stringify(err));
    });
});