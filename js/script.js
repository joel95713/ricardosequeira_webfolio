document.addEventListener('DOMContentLoaded', function () {
  const navLink = document.querySelector('.mailme');

  navLink.addEventListener('mouseenter', function () {
    navLink.textContent = 'fly Bird!';
  });

  navLink.addEventListener('mouseleave', function () {
    navLink.textContent = 'mail me';
  });
});
