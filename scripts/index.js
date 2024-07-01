"use strict";
import { typeWriter } from "./about-us.js";

const h1Element = document.querySelector(".h1");
const textDisplay = `I am glad that you make out time to take a look at my portfolio!`;

typeWriter(h1Element, textDisplay);

setTimeout(function () {
	window.location.replace("pages/homePage.html");
}, 10000);
