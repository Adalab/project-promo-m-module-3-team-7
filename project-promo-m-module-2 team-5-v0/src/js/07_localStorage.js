"use strict";

function saveInLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

function getFromLocalStorage() {
  let dataLocal = JSON.parse(localStorage.getItem("data"));
  if (dataLocal !== null) {
    document.querySelector(".js-name").value = dataLocal.name;
    document.querySelector(".js-job").value = dataLocal.job;
    document.querySelector(".js-email").value = dataLocal.email;
    document.querySelector(".js-phone").value = dataLocal.phone;
    document.querySelector(".js-linkedin").value = dataLocal.linkedin;
    document.querySelector(".js-github").value = dataLocal.github;

    data = dataLocal;

    renderPreview(data);

    updatePhoto();
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (parseInt(paletteElement.value) === dataLocal.palette) {
        paletteElement.checked = true;
      }
    }
  }
}

getFromLocalStorage();

// Reset general
function resetData() {
  localStorage.clear();
  location.reload();
}

resetButton.addEventListener("click", resetData);
