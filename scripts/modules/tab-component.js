"use strict";

const chooseBtnContainer = document.querySelector(".choose--me--header");

function defaultDisplay() {
  const tabPElement = [...document.querySelector(".choose--me--text").children];

  tabPElement.forEach((element) => {
    if (element.id !== "User-Centric") {
      element.classList.add("display--none");
    }
  });
}

function tabComponent() {
  chooseBtnContainer.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.hasAttribute("href")) {
      const check = [...e.target.parentElement.children];
      const targetAttr = e.target.getAttribute("href").slice(1);
      const targetContent = e.target.textContent;
      check
        .filter((el) => el.textContent !== targetContent)
        .map((el) => {
          const attr = el.getAttribute("href").slice(1);
          document.getElementById(attr).classList.add("display--none");
        });

      document.getElementById(targetAttr).classList.remove("display--none");
    }
  });
}

export { tabComponent, defaultDisplay };
