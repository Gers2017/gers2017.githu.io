const burgerBtn = document.querySelector(".burger-btn");
const navegation = document.querySelector(".navegation");
let isOpen = false;

burgerBtn.addEventListener("click", () => {
  if (!navegation.classList.contains("enabled")) {
    navegation.classList.add("enabled");
  }
  navegation.classList.toggle("open");
  burgerBtn.classList.toggle("active");
  isOpen = !isOpen;
});

// slider projects

const projButtons = document.querySelectorAll(".proj-btn");
const cardSides = document.querySelectorAll(".card-side");
let canChangeProject = true;

projButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!canChangeProject) return;
    canChangeProject = false;
    canChangeProjectTimer();

    deactiveButtons();
    button.classList.add("active");

    const projectId = button.dataset.project;
    const left = document.querySelector(`#${projectId} .left`);
    const right = document.querySelector(`#${projectId} .right`);
    setActiveCards(left, right);
  });
});

function canChangeProjectTimer() {
  setTimeout(() => {
    canChangeProject = true;
  }, 1000);
}

function deactiveButtons() {
  projButtons.forEach((button) => {
    button.classList.remove("active");
  });
}
function setActiveCards(target1, target2) {
  cardSides.forEach((item) => {
    if (item === target1 || item === target2) {
      item.classList.add("active");
      item.classList.remove("inactive");
    } else {
      item.classList.remove("active");
      item.classList.add("inactive");
    }
  });
}
