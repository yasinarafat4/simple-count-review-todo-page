//count plus

let value = 0;
document.getElementById("danger-btn").addEventListener("click", function () {
  value = value + 1;
  //   console.log(value);
  document.getElementById("counter").innerText = value;
});

//count minus

// document.getElementById("success-btn").addEventListener("click", function () {
//   value = value - 1;
//   //   console.log(value);
//   document.getElementById("counter").innerText = value;
// });

function makeMinus() {
  value = value - 1;
  //   console.log(value);
  document.getElementById("counter").innerText = value;
}
