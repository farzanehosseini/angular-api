
function toggleNavbar() {
  const navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.style.display === 'none' || navbarMenu.style.display === ''
    ? navbarMenu.style.display = 'flex'
    : navbarMenu.style.display = 'none';
}
