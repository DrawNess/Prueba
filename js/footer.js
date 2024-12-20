document.querySelectorAll(".footer_title").forEach((title) => {
    title.addEventListener("click", () => {
      const ul = title.nextElementSibling; // Selecciona el ul asociado
      ul.classList.toggle("collapsed");
      title.classList.toggle("collapsed");
    });
  });