"use strict";

const sections = document.querySelectorAll("main section");

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove("lazy-load");

  observer.unobserve(entry.target);
};
const observer = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0,
  rootMargin: "50px",
});

sections.forEach((section) => {
  if (!section.querySelector("img")) return;
  const img = section.querySelector("img");
  img.classList.add("lazy-load");
  observer.observe(img);
});

const storeLinks = [];
sections.forEach((section) => {
  if (!section.querySelector("p a")) return;

  const link = section.querySelector("p a");
  storeLinks.push(link)

  });

  storeLinks.filter(link => link.parentElement.className === 'link orange').map(link => {
    link.classList.add('re-style')
  })


