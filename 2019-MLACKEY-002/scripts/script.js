// Event listeners on past work buttons to reveal more text
const pastWorkSection = document.querySelector('.past-work');

function revealText(e) {
  if (e.target.nodeName === 'BUTTON') {
    // Show the information in the div above targeted button
    const previousEl = e.target.previousElementSibling  
    previousEl.classList.toggle('reveal');
    // Then change the text of targeted button
    if (previousEl.classList.contains('reveal')) {
      e.target.innerHTML = `Show less <i class="fas fa-angle-double-up"></i>`;
    } else {
      e.target.innerHTML = `Read more <i class="fas fa-angle-double-right"></i>`;
    }
  }
}

pastWorkSection.addEventListener('click', revealText);