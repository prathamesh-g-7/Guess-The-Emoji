const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.classList.add("flip");
});

// variables

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log(this);
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("checking......");

  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success!");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed!");

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 800);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function quit() {
  cards.forEach((card) => {
    card.style.order = "";
    card.classList.add("flip");
  });
}

function shuffle() {
  cards.forEach((card) => {
    card.classList.remove("flip");
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

function startTimer() {
  let sec = 00;
  let min = 0;

  t = setInterval(() => {
    sec++;
    if (sec > 59) {
      min++;
      sec = 00;
    }
    document.getElementById("time").innerHTML = `${min}:${sec}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(t);
}
