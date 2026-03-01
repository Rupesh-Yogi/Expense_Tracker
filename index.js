
  const menuIcon = document.querySelector(".menu-icon");
  const right = document.querySelector(".right");
  const text = document.querySelector(".text");

  menuIcon.addEventListener("click", () => {
    right.classList.toggle("active");
    text.classList.toggle("active");
  });
