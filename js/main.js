let btn = document.querySelector("button");

btn.addEventListener(
  "click",
  debounce(function () {}, 2000)
);
