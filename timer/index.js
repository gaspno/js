const elementDuration = document.getElementById("duration");
const elementStart = document.getElementById("start");
const elementPause = document.getElementById("pause");
const circle = document.getElementById("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
let step = 0;

const timer = new Timer(elementDuration, elementStart, elementPause, {
  onStart() {
    step =
      circle.getAttribute("stroke-dasharray") /
      elementDuration.getAttribute("value") /
      100;
    elementDuration.disabled = true;
  },
  onTick() {
    currentOffset -= step;
    circle.setAttribute("stroke-dashoffset", currentOffset);
  },
  onComplete() {
    elementDuration.disabled = false;
  },
});

elementDuration.addEventListener("change", function () {
  currentOffset = 0;
  elementDuration.setAttribute("value", parseFloat(this.value).toFixed(2));
  circle.setAttribute("stroke-dasharray", perimeter);
  circle.setAttribute("stroke-dashoffset", currentOffset);
});
