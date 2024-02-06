const menuBtn = document.querySelector(".mobile-nav button");

function showMobileMenu() {
  const menu = document.querySelector(".mobile-nav .floating-menu");
  menu.style.transform = `translateY(0%)`;
}

menuBtn.addEventListener("click,showMobileMenu");

function hideMobileMenu() {
  const menu = document.querySelector(".mobile-nav .floating-menu");
  menu.style.transform = `translateY(-120%)`;
}

const closeMenuBtn = document.querySelector(".floating-menu button");
closeMenuBtn.addEventListener("click", hideMobileMenu);
