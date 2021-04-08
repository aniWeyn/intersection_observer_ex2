const faders__4 = document.querySelectorAll(".fade-in--4");

const appearOptions__4 = {
  treshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll__4 = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      entry.target.classList.add("center");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions__4);

faders__4.forEach((fader) => {
  appearOnScroll__4.observe(fader);
});
