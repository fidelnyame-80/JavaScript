const bobber = document.getElementById('bobber');
let angle = 0; // like the wave angle

function animateBob() {
  const y = Math.sin(angle) * 20; // amplitude: 20px
  bobber.style.top = y + "px";
  angle += 0.05; // speed of wave
  requestAnimationFrame(animateBob); // repeat forever
}

animateBob();
