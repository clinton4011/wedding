// const menu = document.getElementById("menu");
// const mobile = document.getElementById("mobile");
// const menuTwo = document.getElementById("menuTwo");

// document.onclick = function (e) {
//   if (e.target.id !== "mobile" && e.target.id !== "menu") {
//     menu.classList.remove("active");
//     mobile.classList.remove("active");
//     menuTwo.classList.toggle("active");
//   }
// };

// menuTwo.onclick = function () {
//   console.log("boy");
//   menu.classList.toggle("active");
//   mobile.classList.toggle("active");
//   menuTwo.classList.toggle("active");
// };

document.addEventListener("DOMContentLoaded", function () {
  // Set the target date to October 21, 2023
  const targetDate = new Date("2023-10-21");

  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Countdown Over!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
  }

  updateCountdown(); // Call the function initially to avoid delay on the page
  setInterval(updateCountdown, 1000); // Update the countdown every second
});

const me = document.getElementById('me');
const mobile = document.getElementById('mobile');
const ul = document.getElementById('ul')

const clickHandler = () => {
  me.classList.toggle('open');
  mobile.classList.toggle('open');
};

me.addEventListener('click', clickHandler);

document.addEventListener('click', (event) => {
  const isMeClicked = me.contains(event.target);
  const isMobileClicked = mobile.contains(event.target);

  if (!isMeClicked && !isMobileClicked) {
    me.classList.remove('open');
    mobile.classList.remove('open');
  }
});
ul.addEventListener('click', () => {
  me.classList.remove('open');
  mobile.classList.remove('open');
})


// var swiper = new Swiper(".mySwiper", {
//   effect: "flip",
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});