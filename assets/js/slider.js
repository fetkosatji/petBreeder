const itemSlider = () => {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".slider .card");
  const wrapper = document.querySelector(".slider .wrapper");
  const sliderButtonRight = document.querySelector(".right");
  const sliderButtonLeft = document.querySelector(".left");

  wrapper.style.width = cards.length * cards[0].clientWidth + (cards.length - 1) * 20 + "px";

  // prev & next event listeners
  // next button
  if (sliderButtonRight) {
    sliderButtonRight.addEventListener("click", () => {
      sliderButtonLeft.classList.remove("disabled");
      slider.scrollLeft += slider.clientWidth + 15;
      // disabled right nav if end
      if (slider.scrollLeft >= wrapper.clientWidth - slider.clientWidth) {
        sliderButtonRight.classList.add("disabled");
      }
    });
  }
  // prev button
  if (sliderButtonLeft) {
    sliderButtonLeft.addEventListener("click", () => {
      sliderButtonRight.classList.remove("disabled");
      slider.scrollLeft -= slider.clientWidth + 15;
      // disabled left nav if end
      if (slider.scrollLeft == 0) {
        sliderButtonLeft.classList.add("disabled");
      }
    });
  }
};
itemSlider();
