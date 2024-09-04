const filterButton = document.querySelectorAll(".filter_button button");
const filterCards = document.querySelectorAll(".filter_cards .card");

const filterCard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterCards.forEach((card) => {
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

// filterCards.forEach(card => )
// console.log(filterButton,filterCards);
filterButton.forEach((button) => button.addEventListener("click", filterCard));
