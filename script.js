let n = 16;

const input = document.getElementById("grid-size-value");

const submit = document.getElementById("submit");
submit.classList.toggle("submit-button");

const reset = document.createElement("button");
reset.classList.toggle("btn");
reset.textContent = "reset";

const infoContainer = document.querySelector(".info-container");
infoContainer.appendChild(reset);

function createGridItems() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.textContent = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.width = `${100 / n}%`;

      gridContainer.appendChild(gridItem);
    }
  }
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style["backgroundColor"] = "grey";
    });
  });

  setSquareDimensions();
}

function setSquareDimensions() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    const width = item.offsetWidth;
    item.style.height = width + "px";
  });
}

document.addEventListener("DOMContentLoaded", addEventListenerToSubmit);

function addEventListenerToSubmit() {
  submit.addEventListener("click", (e) => {
    if (e.target.classList.contains("submit-button")) {
      useInput(e);
    }
  });

  reset.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      resetGrid();
    }
  });
  createGridItems();
}

function resetGrid() {
  n = 16;
  createGridItems();
}

// window.addEventListener("resize", setSquareDimensions);

function useInput(e) {
  e.preventDefault();
  n = input.value;
  // input.value = "";
  console.log(n);
  createGridItems();
}
