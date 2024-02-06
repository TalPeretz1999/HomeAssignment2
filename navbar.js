const OpenMenuButton = document.querySelector("#mobail-nav button");
OpenMenuButton.addEventListener("click", function () {
  const menu = document.querySelector(".floating-menu");
  // menu.style.transfrom = "translateX(0)";
  menu.style.display = "block";
  OpenMenuButton.style.display = "none";
  closeMenuButton.style.display = "block";
});

const closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener("click", () => {
  const menu = document.querySelector(".floating-menu");
  closeMenuButton.style.display = "none";
  OpenMenuButton.style.display = "block";
  menu.style.display = "none";

  // menu.style.transfrom = "translateX(-130%)";
});
