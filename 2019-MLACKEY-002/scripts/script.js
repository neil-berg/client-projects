// Functions to handle event listeners

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
    .map((item, i) => {
      return `
      <img src="images/gallery_${i + 1}.png" 
          alt="still image from Cablestreet" 
          class="gallery__image" 
      />`;
    })
    .join('');
}

const pastWorkSection = document.querySelector('.work');

// Event listeners to dynamically create the image gallery
window.addEventListener('DOMContentLoaded', createGallery);
window.addEventListener('resize', createGallery);

// Event listeners on past work buttons to reveal more text
pastWorkSection.addEventListener('click', revealText);
