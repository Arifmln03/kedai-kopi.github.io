// Toggle class active

// navbar dan hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// shopping-cart
const shopping = document.querySelector("#shopping");
const shoppingCart = document.querySelector(".shopping-cart");
shopping.onclick = () => {
  shoppingCart.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!shoppingCart.contains(e.target) && !shopping.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// item detail modal
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");
for (let i = 0; i < itemDetailButton.length; i++) {
  itemDetailButton[i].onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
}

const close = document.querySelectorAll(".modal .close-icon");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  };
}

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
