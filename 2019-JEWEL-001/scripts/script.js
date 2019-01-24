const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const menuGroups = document.querySelectorAll('.menu__group');

function menuSwitch(e) {
  e.preventDefault();
  const targetItem = e.target.innerText.toLowerCase();
  console.log(targetItem);
  
  navLinks.forEach(link => {
    console.log(link.classList);
    
    if (link.classList.contains(targetItem)) {
      link.classList.add('clicked')
    } else {
      link.classList.remove('clicked');
    }
  });
  
  // Reveal the menu
  menuGroups.forEach(group => {
    if (group.classList.contains(targetItem)) {
      group.classList.add('reveal');
    } else {
      group.classList.remove('reveal');
    }
  })
  
}

nav.addEventListener('click', menuSwitch);