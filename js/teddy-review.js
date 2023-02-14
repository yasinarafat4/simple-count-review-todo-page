document.getElementById("review-btn").addEventListener("click", function () {
  const myElement = document.getElementById("floatingTextarea2");
  const myElementValue = myElement.value;

  const p = document.createElement("p");
  p.innerText = myElementValue;
  const parentUl = document.getElementById("review-container");
  parentUl.appendChild(p);
  myElement.value = "";
});
