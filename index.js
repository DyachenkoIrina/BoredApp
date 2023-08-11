const bodyNode = document.querySelector("body");
const titleNode = document.querySelector("#js-title");
const textNode = document.querySelector("#js-text");
const btnNode = document.querySelector("#btn");

btnNode.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      textNode.innerText = `${data.activity}!`;
      renderNewStyle();
    });
});

function renderNewStyle() {
  bodyNode.classList.add("fun");
  titleNode.innerText = "Have a good time!🔥";
}
