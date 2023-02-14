let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count += 1;
  const myInputValue = document.getElementById("input-value").value;

  const parent = document.getElementById("tbody-container");

  const tr = document.createElement("tr");

  // using template (``) string to add many HTML in one time
  tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class="delete-btn btn btn-danger">Delete</button>
    <button class="btn btn-primary">Done</button>
    </td>

  `;
  parent.appendChild(tr);
  document.getElementById("input-value").value = "";

  const elements = document.querySelectorAll(".delete-btn");

  for (const value of elements) {
    value.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
});

document
  .getElementById("clear-btn")
  .addEventListener("click", function (event) {
    event.target.parentNode.style.display = "none";
  });
