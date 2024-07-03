"use strict";

const btnsCont = document.querySelector(".choose--me--header");

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
			const test = check
				.filter((el) => el.textContent !== targetContent)
				.map((el) => {
					const attr = el.getAttribute("href").slice(1);
					document.getElementById(attr).classList.add("display--none");
				});

			document.getElementById(targetAttr).classList.remove("display--none");

			check.map((el) => {
				el.classList.remove("active");
			});
			e.target.classList.add("active");
		}
	});
}

export { tabComponent, defaultDisplay };
