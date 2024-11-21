function navigateTo(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = page;
    }, 500);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });
 
  // HAMBURGER

function toggleMenu() {
  const navContainer = document.querySelector('.top__nav--container');
  navContainer.classList.toggle('active');
}
function navigateTo(page) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});
