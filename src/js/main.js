const sliderDivs = document.querySelectorAll(".slider>div");
const navBar = document.querySelector(".navleft");
const links = document.querySelectorAll(".navleft>a");

navBar.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;

  if (!target.closest("a")) return;

  links.forEach((el) => {
    if (el == target) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  const name = e.target.closest("a").innerText.toLowerCase();

  sliderDivs.forEach((e) => {
    if (e.id == name) {
      e.classList.remove("hidden");
    } else {
      e.classList.add("hidden");
    }
  });
});
