let btn = document.querySelector("button");

function debounce(fn, delay) {
  let timeOut;
  return function () {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn();
    }, delay);
  };
}

btn.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  }, 2000)
);
