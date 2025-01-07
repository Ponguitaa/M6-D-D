
const dragItems = document.querySelectorAll('.drag-item');
const dropzones = document.querySelectorAll('.dropzone');
const confirmarBtn = document.getElementById('confirmar');
const resultado = document.getElementById('resultado');
const background = document.getElementById('background');


dragItems.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text', e.target.id);
  });
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.style.backgroundColor = '#d3d3d3';
  });

  zone.addEventListener('dragleave', () => {
    zone.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(id);
    zone.textContent = draggedElement.textContent;
    zone.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  });
});

confirmarBtn.addEventListener('click', () => {
  const decision1 = document.getElementById('zone1').textContent;
  const decision2 = document.getElementById('zone2').textContent;
  const decision3 = document.getElementById('zone3').textContent;

  if (!decision1 || !decision2 || !decision3 || 
      decision1.includes('Elige') || decision2.includes('Decide') || decision3.includes('Elige')) {
    resultado.textContent = 'Por favor, completa todas las decisiones antes de confirmar.';
    resultado.style.color = 'red';
    return;
  }

  // Finales
  if (decision1 === '⚡ Semilla del Ermitaño' && decision2 === '🛡️ Escudo de Energía' && decision3 === '🔥 Genkidama') {
    resultado.textContent = '¡Goku derrota a Majin Boo con un épico ataque final!';
    background.style.backgroundImage = "url('../img/Planeta_Sagrado.webp')";
  } else {
    resultado.textContent = 'Majin Boo supera a Goku. La Tierra está perdida.';
    background.style.backgroundImage = "url('../img/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp')";
  }
});
