var button = document.querySelector("#about");

button.addEventListener("click", () => {
  var section = document.querySelector("#biografy");
  section.scrollIntoView({ behavior: "smooth" });
});

var button = document.querySelector("#songs");

button.addEventListener("click", () => {
  var section = document.querySelector("#listen");
  section.scrollIntoView({ behavior: "smooth" });
});

var button = document.querySelector("#facts");

button.addEventListener("click", () => {
  var section = document.querySelector("#interesting");
  section.scrollIntoView({ behavior: "smooth" });
});