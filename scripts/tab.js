const reviewsBar = document.querySelector(".reviews__list");
const reviewsItems = document.querySelectorAll(".reviews__item");
const reviewWrapp = document.querySelectorAll(".reviews__wrap");

reviewsBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("reviews__item")) {
    const currentPeople = e.target;
    const currentPeopleId = currentPeople.id;

    for (const iterator of reviewsItems) {
      if (iterator !== currentPeople) {
        iterator.classList.remove("reviews__item--active");
      }
    }

    if (!currentPeople.classList.contains("reviews__item--active")) {
      currentPeople.classList.add("reviews__item--active");
    }

    reviewWrapp.forEach(function (wrapp) {
      if (currentPeopleId === wrapp.id) {
        wrapp.classList.add("reviews__wrap--active");
      } else {
        wrapp.classList.remove("reviews__wrap--active");
      }
    });
  }
});
