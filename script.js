const phases = document.querySelectorAll('.phase');

phases.forEach(phase => {
  phase.addEventListener('mouseover', () => {
    phase.style.width = '140px';
    phase.style.height = '140px';
  });

  phase.addEventListener('mouseout', () => {
    phase.style.width = '140px';
    phase.style.height = '140px';
  });
});