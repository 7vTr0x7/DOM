function blue() {
  document.getElementById("header").style.color = "blue";
}
function yellow() {
  document.getElementById("header").style.color = "yellow";
}

function black() {
  document.querySelector("body").style.backgroundColor = "black";
}
function violet() {
  document.querySelector("body").style.backgroundColor = "violet";
}

function get() {
  let value = document.getElementById("input").value;

  document.getElementById("txt").innerText = value;
}

function change() {
  document.getElementById("txt").style.color = "blue";
}

function red() {
  document.getElementById("txt").style.color = "red";
}
