const blogSearch = document.getElementById("blogSearch");
blogSearch.addEventListener("keyup", filterPosts);

function filterPosts() {
  let filterValue = blogSearch.value.toLowerCase();
  const posts = document.querySelectorAll(".card").forEach((post) => {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? (post.style.display = "")
      : (post.style.display = "none");
  });
}
// Intersection Observer
const header = document.querySelector(".hero");
const mainNav = document.querySelector(".mainNav");

const navObsCallback = (e) => {
  !e[0].isIntersecting
    ? mainNav.classList.add("applyBackground")
    : mainNav.classList.remove("applyBackground");
};

const navObsOption = { threshold: 0.9 };

const navObs = new IntersectionObserver(navObsCallback, navObsOption);

navObs.observe(header);
