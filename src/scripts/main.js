function enviarWhatsApp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;


  var mensagem = "Olá, gostaria de mais informações sobre o Niwa Clube de Pesca. Meu nome é " + encodeURIComponent(nome) + " e meu e-mail é " + encodeURIComponent(email) + ".";
  var linkWhatsApp = "https://api.whatsapp.com/send?phone=+5516997683413&text=" + mensagem;

  window.open(linkWhatsApp, '_blank');

  document.getElementById("whatsappForm").reset();
}

$(document).ready(function() {
  $("#whatsappForm").on("submit", function(event) {
    event.preventDefault(); 
    enviarWhatsApp();
  });
});
