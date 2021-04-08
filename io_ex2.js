const faders2 = document.querySelectorAll(".fade-in--2");

const appearOptions2 = {
  treshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll2 = new IntersectionObserver(function (
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
appearOptions2);

faders2.forEach((fader) => {
  appearOnScroll2.observe(fader);
});
