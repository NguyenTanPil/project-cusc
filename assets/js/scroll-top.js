// start scroll top
const toTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// end scroll top 