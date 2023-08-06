/*const sections = document.querySelectorAll("section");
const active = document.querySelector(".active");
const color = "color:#f15025;";

const option = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, option);
function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradIndex = entry.target.getAttribute(`data-index`);
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
*/
