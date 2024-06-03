"use strict";

const addressBtn = document.querySelector(".my--address--btn");
const showAddressCont = document.querySelector(".show--address");

let trackClick = false;
addressBtn.addEventListener("click", function (e) {
  if (!trackClick) {
    showAddressCont.style.display = "inline";
    trackClick = true;
  } else {
    showAddressCont.style.display = "none";
    trackClick = false;
  }
});

(function() {
  const timeContainer = showAddressCont.querySelector('span');
  const date = new Date().toLocaleDateString('default', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  timeContainer.textContent = `${date}.`;

})();
