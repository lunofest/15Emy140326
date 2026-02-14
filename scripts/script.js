
const audio = document.querySelector('.player__audio');
const playButton = document.querySelector('.player__button--play i');
let isPlaying = false;

document.querySelector('.player__button--play').addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playButton.classList.replace('fa-play', 'fa-pause');
  } else {
    audio.pause();
    playButton.classList.replace('fa-pause', 'fa-play');
  }
  isPlaying = !isPlaying;
});

// Opcional: volver al principio al terminar
audio.addEventListener('ended', () => {
  playButton.classList.replace('fa-pause', 'fa-play');
  isPlaying = false;
});









const targetDate = new Date("march 14, 2026 22:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('dias').textContent = '0';
    document.getElementById('horas').textContent = '00';
    document.getElementById('minutos').textContent = '00';
    document.getElementById('segundos').textContent = '00';
    return;
  }

  const segundos = Math.floor((diff / 1000) % 60);
  const minutos = Math.floor((diff / 1000 / 60) % 60);
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('dias').textContent = dias.toString(); // SIN padStart
  document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();





// --------------REGALOS------------------



document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('mostrarBoton');
  const textoDesplegable = document.getElementById('textoDesplegable');

  boton.addEventListener('click', function () {
    textoDesplegable.classList.toggle('mostrar');
  });
});


function copyText() {
  var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
  var tempInput = document.createElement('input');
  tempInput.value = aliasText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Mostrar el mensaje de "¡Copiado!"
  var copyMessage = document.getElementById('copyMessage');
  copyMessage.style.display = 'block';
  setTimeout(function () {
    copyMessage.style.display = 'none';
  }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
  const aliasText = document.getElementById('cbuAlias').textContent;
  const copyMessage = document.getElementById('copyCbuMessage');

  const textarea = document.createElement('textarea');
  textarea.value = aliasText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  copyMessage.style.display = 'block';
  setTimeout(() => {
    copyMessage.style.display = 'none';
  }, 2000);
}



// -----------playlist---------------

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("playlist__button");
  const form = document.getElementById("playlist__form");
  const sendBtn = document.getElementById("enviarSugerencia");
  const nameInput = document.getElementById("nombre");
  const songInput = document.getElementById("cancion");

  // Mostrar / ocultar formulario
  toggleBtn.addEventListener("click", () => {
    form.classList.toggle("mostrar");
  });

  // Enviar a WhatsApp y limpiar campos
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const nombre = nameInput.value.trim();
    const cancion = songInput.value.trim();

    if (!nombre || !cancion) {
      alert("Por favor completa ambos campos.");
      return;
    }

    const mensaje = `Hola mi nombre es *${nombre}* y recomiendo:\n*${cancion}*`;
    const url = `https://wa.me/543815110838?text=${encodeURIComponent(mensaje)}`;

    // Abre WhatsApp en nueva pestaña
    window.open(url, "_blank");

    // Limpia campos (la vista y el formulario permanecen igual)
    nameInput.value = "";
    songInput.value = "";
  });
});




// --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function () {
  // Definir los números de teléfono
  const recipientNumber1 = '543815443744'; // Número para el primer botón
  const recipientNumber2 = '543815411429'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
    const userName = document.getElementById('userFullName').value.trim();
    const userMessage = document.getElementById('customMessage').value.trim();
    const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

    if (!attendanceStatus) {
      alert('Por favor, selecciona si asistirás o no.');
      return;
    }

    if (userName === '') {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

    // Abre la URL de WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');

    // Mostrar mensaje de confirmación
    alert('Mensaje enviado');

    // Limpiar los campos de entrada
    document.getElementById('userFullName').value = '';
    document.getElementById('customMessage').value = '';
    document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

    // Volver al bloque de formulario
    document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
  }

  // Asignar eventos a los botones
  document.getElementById('botoncito1').addEventListener('click', function () {
    sendMessage(recipientNumber1);
  });

  document.getElementById('botoncito2').addEventListener('click', function () {
    sendMessage(recipientNumber2);
  });
});

















// Initialize Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

