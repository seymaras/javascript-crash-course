const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getfromLocalStorage();
calculateTotal();

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", () => {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".seat.selected");

  const seatsArr = [...seats];
  const selectedSeatsArr = [...selectedSeats];
  const selectedSeatIndexes = selectedSeatsArr.map((seat) =>
    seatsArr.indexOf(seat)
  );

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * Number(select.value);

  saveToLocalStorage(selectedSeatIndexes);
}

function getfromLocalStorage() {
  const saved = JSON.parse(localStorage.getItem("selectedSeats"));
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (Array.isArray(saved)) {
    saved.forEach((i) => {
      if (seats[i]) seats[i].classList.add("selected");
    });
  }
  if (selectedMovieIndex !== null) {
    select.selectedIndex = selectedMovieIndex;
  }
}

function saveToLocalStorage(indexes) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexes));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}
