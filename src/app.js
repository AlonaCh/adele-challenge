
const button = document.querySelector("#about");

button.addEventListener("click", () => {
  const section = document.querySelector("#biografy");
  section.scrollIntoView({ behavior: "smooth" });
});
