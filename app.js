const onButton = document
  .getElementById("on")
  .addEventListener("click", function () {
    document.getElementById("my-image").src = "img/on.jpg";
  });
const offButton = document
  .getElementById("off")
  .addEventListener("click", function () {
    document.getElementById("my-image").src = "img/off.png";
  });