let font = document.getElementById("font-size");
for (var i = 16; i <= 30; i++) {
  let options = document.createElement("option");
  options.value = i;
  options.innerHTML = i;
  font.appendChild(options);
}
 
let fonts = document.querySelector("#fonts");
let colors = document.querySelector("#colors");
let size = document.querySelector("#font-size");

fonts.onchange = function () {
  window.localStorage.setItem("fonts", this.value);
  document.body.style.fontFamily=this.value;
};

colors.onchange = function () {
  window.localStorage.setItem("colors", this.value);
  document.body.style.color=this.value;
};

size.onchange = function () {
  window.localStorage.setItem("font-size", size.value);
  document.body.style.fontSize=size.value+"px";
};

document.body.style.fontFamily = window.localStorage.getItem("fonts");
document.body.style.fontSize = window.localStorage.getItem("font-size")+"px";
document.body.style.color = window.localStorage.getItem("colors");

if (window.localStorage.getItem("fonts")) {
  fonts.value = window.localStorage.getItem("fonts");
}
if ( window.localStorage.getItem("colors")) {
  colors.value = window.localStorage.getItem("colors");
}
if (window.localStorage.getItem("font-size")) {
  size.value = window.localStorage.getItem("font-size");
}

