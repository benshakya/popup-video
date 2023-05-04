const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".video-container");
const videoPlayerEl = document.querySelector("video");
const closeBtnEl = document.querySelector(".close-btn");

btnEl.addEventListener("click", () => {
  videoEl.classList.remove("inactive");
});

closeBtnEl.addEventListener("click", () => {
  videoEl.classList.add("inactive");
  videoPlayerEl.pause();
  videoPlayerEl.currentTime = 0;
});

window.addEventListener("keydown", (event) => {
  let button = event.key;
  if (button === "Escape") {
    closeBtnEl.click();
  }
});
