const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark", themeToggle.checked);
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const brushWidth = document.getElementById("brush-width");
const brushWidthDisplay = document.getElementById("brush-width-display");
const brushColor = document.getElementById("color-picker");
const brush = document.querySelector(".brush");
const eraser = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");

let isDrawing = false;
let currenWidth = brushWidth.value;
let currenColor = "";

brushWidthDisplay.textContent = currenWidth;

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

function startDraw() {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = currenWidth;
}

function drawing(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `${currenColor}`;
  ctx.stroke();
}

function endDraw() {
  isDrawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", endDraw);

brushWidth.addEventListener("input", () => {
  currenWidth = brushWidth.value;
  brushWidthDisplay.textContent = currenWidth;
});

brushColor.addEventListener("change", () => {
  currenColor = brushColor.value;
});

eraser.addEventListener("click", () => {
  eraser.classList.add("active");
  brush.classList.remove("active");
  currenColor = "white";
});
brush.addEventListener("click", () => {
  brush.classList.add("active");
  eraser.classList.remove("active");
  currenColor = brushColor.value;
});

clearBtn.addEventListener("click", () => {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
