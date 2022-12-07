//click remove active class
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vernmillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
const colorContainer = document.querySelector("#colorContainer");
const house = document.querySelector("#house");
/// tạo button color  
colorList.map((e, i) => {
  const buttonColor = document.createElement("button");
  buttonColor.classList.add(e);
  buttonColor.classList.add("color-button");
  i === 0 ? buttonColor.classList.add("active") : null;
  document.querySelector("#colorContainer").appendChild(buttonColor);
});
/// remove class
function removeActive(buttonList) {
  if (!buttonList) return;
  const buttonListElement = buttonList.querySelectorAll(".color-button");
  buttonListElement.forEach((buttonListElement) => {
    buttonListElement.classList.remove("active");
    house.classList.remove(buttonListElement.classList[0]);
  });
}
const buttonListElement = colorContainer.querySelectorAll(".color-button");

buttonListElement.forEach((buttonListElement, i) => {
  buttonListElement.addEventListener("click", () => {
    removeActive(buttonListElement.parentNode);
    buttonListElement.classList.add("active");
    house.classList.add(buttonListElement.classList[0]);
  });
});
