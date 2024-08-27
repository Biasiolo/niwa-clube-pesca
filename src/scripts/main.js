// Define a função globalmente
function enviarWhatsApp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;

  // Monta a mensagem com nome e e-mail
  var mensagem = "Olá, gostaria de mais informações sobre o Niwa Clube de Pesca. Meu nome é " + encodeURIComponent(nome) + " e meu e-mail é " + encodeURIComponent(email) + ".";

  // Link para o WhatsApp com a mensagem pré-definida
  var linkWhatsApp = "https://api.whatsapp.com/send?phone=+5516997683413&text=" + mensagem;

  // Abre o link do WhatsApp em uma nova aba
  window.open(linkWhatsApp, '_blank');
}

$(document).ready(function() {
  // Vincula a função ao clique do botão
  $("#whatsappForm").on("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    enviarWhatsApp();
  });
});
