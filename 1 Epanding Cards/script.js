const panels = document.querySelectorAll(".panel");

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  // click
  panel.addEventListener("mouseover", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
