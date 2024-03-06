document.addEventListener('DOMContentLoaded', function () {
  const navLink = document.querySelector('.nav-link');

  navLink.addEventListener('mouseenter', function () {
    navLink.textContent = 'ILLUSTRATION';
  });

  navLink.addEventListener('mouseleave', function () {
    navLink.textContent = 'ILLUSTRATION';
  });
});
