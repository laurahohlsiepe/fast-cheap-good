const fast = document.querySelector("#var1");
const cheap = document.querySelector("#var2");
const good = document.querySelector("#var3");
let lastChecked = null;

function checkCheckBoxes(e) {
  if (fast.checked && cheap.checked && good.checked) {
    lastChecked.checked = false;
  }

  if (e.target.checked) {
    lastChecked = e.target;
  }
}

document.querySelector("body").addEventListener("change", checkCheckBoxes);
/*

check.addEventListener("change", function () {
  if (fast.checked && cheap.checked && good.checked) {
    good.checked = false;
  }

  if (fast.checked && cheap.checked && good.checked) {
    lastChecked = false;
  }
});

cheap.addEventListener("change", function () {
  if (fast.checked && cheap.checked && good.checked) {
    good.checked = false;
  }

  if (fast.checked && cheap.checked && good.checked) {
    lastChecked = false;
  }
});

good.addEventListener("change", function () {
  if (fast.checked && cheap.checked && good.checked) {
    cheap.checked = false;
  }

  if (fast.checked && cheap.checked && good.checked) {
    lastChecked = false;
  }
});
 
*/
