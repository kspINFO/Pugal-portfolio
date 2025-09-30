

// JS only for toggling the data-theme attribute
const btn = document.getElementById('theme-toggle');
const html = document.documentElement;

btn.addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
});

const scroller = document.getElementById('scroller');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function visibleStep() {
  return scroller.parentElement.clientWidth - 16;
}

function slide(delta) {
  const step = visibleStep();
  const current = scroller._offset || 0;
  let nextOffset = current + delta * step;
  const maxOffset = Math.max(0, scroller.scrollWidth - scroller.parentElement.clientWidth + 8);
  nextOffset = Math.max(0, Math.min(nextOffset, maxOffset));
  scroller.style.transform = `translateX(${-nextOffset}px)`;
  scroller._offset = nextOffset;
}

prev.addEventListener('click', () => slide(-1));
next.addEventListener('click', () => slide(1));

scroller.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { slide(1); e.preventDefault(); }
  if (e.key === 'ArrowLeft') { slide(-1); e.preventDefault(); }
});

window.addEventListener('resize', () => {
  if (!scroller._offset) scroller._offset = 0;
  const maxOffset = Math.max(0, scroller.scrollWidth - scroller.parentElement.clientWidth + 8);
  if (scroller._offset > maxOffset) {
    scroller._offset = maxOffset;
    scroller.style.transform = `translateX(${-maxOffset}px)`;
  }
});

scroller.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
  if (Math.sign(e.deltaY) === 1) slide(1);
  else slide(-1);
  e.preventDefault();
}, { passive: false });


// Alert on button click
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks for reaching out! Kumar K will connect with you soon.");
});







// Example small animation when about section loads
document.addEventListener("DOMContentLoaded", () => {
  const aboutCard = document.querySelector(".about-card");
  aboutCard.style.opacity = "0";
  aboutCard.style.transform = "translateY(30px)";

  setTimeout(() => {
    aboutCard.style.transition = "all 0.8s ease";
    aboutCard.style.opacity = "1";
    aboutCard.style.transform = "translateY(0)";
  }, 200);
});




// Simple form animation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
});



