export function setActiveButton(tabName) {
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((tab) => {
    if (tab.getAttribute("data-tab") === tabName) {
      tab.classList.add("active");
      tab.style.color = "red";
    } else {
      tab.classList.remove("active");
      tab.style.color = "black";
    }
  });
}

export default function openTab(evt, tabName) {
  let tabContent = document.getElementsByClassName("tabContent");
  let tablinks = document.getElementsByClassName("tablinks");
  // eslint-disable-next-line no-param-reassign
  tabName = evt.currentTarget.dataset.tab;

  tabContent = document.querySelectorAll(".tabContent");
  tabContent.forEach((tab) => {
    // eslint-disable-next-line no-param-reassign
    tab.style.display = "none";
  });

  tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((tab) => tab.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  setActiveButton(tabName);

  // hide all tab contents

  for (let i = 0; i < tabContent.length; i += 1) {
    tabContent[i].style.display = "none";
  }

  // remove active class from all tab links

  for (let i = 0; i < tablinks.length; i += 1) {
    tablinks[i].classList.remove("active");
  }

  // display the clicked tab content and add active class to the clicked tab link
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
