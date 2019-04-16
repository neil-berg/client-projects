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
// We have 15 unique thumbnails, so if the viewport height
// requires > 15 thumbnails, we'll just select a random
// thumbnail within 1-15 for indices 16 and above.
function createGallery(e) {
  let size; // image size in pixels
  const windowWidth = window.innerWidth;
  if (windowWidth < 450) {
    size = 90;
  } else {
    size = 120;
  }
  const windowHeight = window.innerHeight;
  const possibleBoxes = Math.floor(windowHeight / size);
  // Account for 10px margin top for each box
  // + 10px margin bottom for the last image
  const totalMargin = possibleBoxes * 10 + 10;
  const boxesToRemove = Math.ceil(totalMargin / size);
  const totalBoxes = possibleBoxes - boxesToRemove;

  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = Array(totalBoxes)
    .fill()
    .map((_, i) => {
      return `
      <img src="images/gallery_${
        i < 14 ? i + 1 : Math.floor(Math.random() * 15 + 1)
      }.png" 
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
