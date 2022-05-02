const preLoad = document.querySelector("#loading");
const sideBar = document.querySelector(".sidebar");
const InputValidateData = document.querySelector(".ip-validate");
const modalBackground = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const sucessMsg = document.querySelector(".sucess-msg");
const errorMsg = document.querySelector(".error-msg");
const warnMsg = document.querySelector(".warn-msg");
const val = document.querySelector(".val");
const cardOne = document.querySelector(".cardOne");

const preLoader = () => {
  setTimeout(() => {
    preLoad.style.display = "none";
  }, 1000);
};

const inputValidate = () => {
  data = InputValidateData.value;
  if (data.length < 6) {
    val.innerHTML = "*Less ";
  }else
  if (data.length >10) {
    val.innerHTML = "UnAccepted  ";
  }  else {
    val.innerHTML = "";
  }
};

const closeCard = () => {
  cardOne.style.display='none'
};

const snackSucess = () => {
  sucessMsg.style.display = "block";
  setTimeout(() => {
    sucessMsg.style.display = "none";
  }, 1000);
};
const snackError = () => {
  errorMsg.style.display = "block";
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 1000);
};

const snackWarn = () => {
  warnMsg.style.display = "block";
  setTimeout(() => {
    warnMsg.style.display = "none";
  }, 1000);
};

const openModal = () => {
  modalBackground.style.display = "block";
};

closeIcon.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

const sideshow = () => {
  sideBar.classList.toggle("active");
};
