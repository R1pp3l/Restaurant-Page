import "./style.css";
import openTab from "./switch";

document.addEventListener("DOMContentLoaded", () => {
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i += 1) {
    tablinks[i].addEventListener("click", openTab);
  }

  document.querySelector('.tablinks[data-tab="contentOne"]').click();
});
