export function renderTitle() {
  const titleContainer =
    document.getElementById("title") || document.createElement("div");

  const titleElement = document.createElement("p");
  titleElement.textContent = "Testing the DOM with vitest";

  titleContainer.append(titleElement);
}

renderTitle();
