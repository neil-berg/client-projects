// Event listeners on past work buttons to reveal more text
const pastWorkSection = document.querySelector('.work');

function revealText(e) {
  if (e.target.classList.contains('fas')) {
    // Show the information in the div above targeted icon
    const previousEl = e.target.previousElementSibling;
    previousEl.classList.toggle('reveal');
    // Then change the icon
    if (previousEl.classList.contains('reveal')) {
      e.target.classList.add('fa-angle-double-up');
      e.target.classList.remove('fa-angle-double-right');
    } else {
      e.target.classList.add('fa-angle-double-right');
      e.target.classList.remove('fa-angle-double-up');
    }
  }
}

// Determine number of thumbnails based on viewport height
function createGallery(e) {
  const height = window.innerHeight;
  const numBoxes = Math.floor(height / 80) - 1;
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = Array(numBoxes)
    .fill()
    .map(item => {
      return `
      <img src="images/cablestreet_sq_${Math.floor(Math.random() * 6 + 1)}.jpg" 
          alt="" 
          class="gallery__image" 
      />`;
    })
    .join('');
}

window.addEventListener('DOMContentLoaded', createGallery);
window.addEventListener('resize', createGallery);
pastWorkSection.addEventListener('click', revealText);
