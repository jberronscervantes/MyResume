const text = `> whoami
José Berrón - Cyber Developer

> cat skills.txt
C#, VB, Kinect SDK, Interacción Gestual, Voz, Windows API

> cat project.txt
Kinect To Windows 8 → Matrícula de Honor (único en la promoción)
Expediente Electrónico OGF → Gestión de Firmas Digitales

> echo "Listo para el siguiente reto..."`;

let i = 0;
const speed = 30;
const elem = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    if (text.charAt(i) === '\n') {
      elem.innerHTML += '<br>';
    } else {
      elem.innerHTML += text.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector('.cursor').style.display = 'none';
  }
}

setTimeout(typeWriter, 500);
