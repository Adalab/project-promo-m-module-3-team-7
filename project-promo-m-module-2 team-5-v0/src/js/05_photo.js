"use strict";

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
const imgDefault = "./assets/images/preview2.png";

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  data.photo = fr.result;
  updatePhoto();
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto = data.photo;
  if (currentPhoto !== "") {
    profilePreview.style.backgroundImage = `url(${currentPhoto})`;
    profileImage.style.backgroundImage = `url(${currentPhoto})`;
  } else {
    profilePreview.style.backgroundImage = "";
    profileImage.style.backgroundImage = "";
  }
}

function fakeFileClick() {
  fileField.click();
}

/*uploadBtn.addEventListener("click", fakeFileClick);*/
fileField.addEventListener("change", getImage);
