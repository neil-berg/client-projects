const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const menuGroups = document.querySelectorAll('.menu__group');

function menuSwitch(e) {
  e.preventDefault();
  const targetItem = e.target.innerText.toLowerCase();
  
  navLinks.forEach(link => {    
    if (link.classList.contains(targetItem)) {
      link.classList.add('clicked')
    } else {
      link.classList.remove('clicked');
    }
  });
  
  menuGroups.forEach(group => {
    if (group.classList.contains(targetItem)) {
      group.classList.add('reveal');
    } else {
      group.classList.remove('reveal');
    }
  })
  
}

nav.addEventListener('click', menuSwitch);