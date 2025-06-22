// Menu Mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Alternar menu
  navLinks.classList.toggle('active');

  // Animação do burger
  burger.classList.toggle('toggle');

  // Desabilitar scroll quando o menu está aberto
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar em um item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
    document.body.style.overflow = 'auto';
  });
});

// Botão voltar ao topo
window.onscroll = function () {
  const btnTopo = document.getElementById('btnTopo');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
};

document.getElementById('btnTopo').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Marcar link ativo
const currentPage = location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});