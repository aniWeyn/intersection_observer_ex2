const faders__3 = document.querySelectorAll(".fade-in--3");

const appearOptions__3 = {
  treshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll__3 = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions__3);

faders__3.forEach((fader) => {
  appearOnScroll__3.observe(fader);
});
