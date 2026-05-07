/** @type {HTMLElement} */
const slider = document.querySelector("#partner-window");
/** @type {HTMLElement} */
const train = document.querySelector("#partner-train");

let isDown = false;
let startX;
let currentX = 0;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  // Transition should be 'none' during drag for instant feedback
  train.style.transition = "none";
  startX = e.pageX - currentX;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  let x = e.pageX;
  currentX = x - startX;

  // Applying assymetric drag
  let a = 0.5 * currentX;
  // Apply the movement
  train.style.transform = `translateX(${currentX - a}px)`;
});

window.addEventListener("mouseup", () => {
  isDown = false;

  // ADD THE SNAPPING LOGIC HERE
  train.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"; // Smooth snap

  const maxScroll = slider.offsetWidth - train.offsetWidth;

  // Case 1: Dragged too far Right (Cisco side)
  if (currentX > 0) {
    currentX = 0;
  }
  // Case 2: Dragged too far Left (Salesforce side)
  // If the train is smaller than the window, maxScroll will be positive, so we snap to 0
  else if (currentX < maxScroll) {
    currentX = maxScroll > 0 ? 0 : maxScroll;
  }

  train.style.transform = `translateX(${currentX}px)`;
});

// For changing agent (previous sibling of creative) while hover on creative [cause CSS :has() pseudoclass is not widely supported]
const creative = document.querySelector("#creative-platform-img");
const agent = document.querySelector("#agents-platform-img");

//agent hover effect
agent.addEventListener("mouseenter", () => {
  agent.classList.add("active");
  creative.classList.remove("active");
});

// Creative hover effect
creative.addEventListener("mouseenter", () => {
  creative.classList.add("active");
  agent.classList.remove("active");
});
