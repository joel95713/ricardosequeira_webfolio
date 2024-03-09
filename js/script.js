document.addEventListener('DOMContentLoaded', function () {
  const navLink = document.querySelector('#mailme');
  const spanElement = navLink.querySelector('.align-bottom');

  navLink.addEventListener('mouseenter', function () {
   spanElement.textContent = ' fly  Bird!';
  });

  navLink.addEventListener('mouseleave', function () {
    spanElement.textContent = 'mail me';
  });
});


