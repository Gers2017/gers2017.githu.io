const repeatEffect = false;
function isElementInView(el, dividend = 1) {
  const top = el.getBoundingClientRect().top;
  return (
    top <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
}

function isElementOutView(el) {
  const top = el.getBoundingClientRect().top;
  return top > (window.innerHeight || document.documentElement.clientHeight);
}

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const scrollElements = document.querySelectorAll(".scroll-item");

scrollElements.forEach((e) => e.classList.add("js-opacity"));

function handleScroll() {
  scrollElements.forEach((el) => {
    if (isElementInView(el, 1.5)) {
      displayScrollElement(el);
    } else if (isElementOutView(el) && repeatEffect) {
      hideScrollElement(el);
    }
  });
}

let throttleTimer = false;

const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const navbar = document.querySelector(".navbar");

function checkNavbarLimit() {
  const scrollTop = document.documentElement.scrollTop;
  const navbarBottom = navbar.getBoundingClientRect().bottom;

  if (scrollTop >= navbarBottom) {
    //console.log("greater", scrollTop, navbarBottom);
    navbar.classList.add("scrolled");
  } else if (scrollTop < navbarBottom) {
    //console.log("lower", scrollTop, navbarBottom);
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", () => {
  throttle(() => {
    handleScroll();
    checkNavbarLimit();
  }, 250);
});
