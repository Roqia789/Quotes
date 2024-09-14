var ArrOfQuotes = [
  {
    author: "― Roqia Sameh",
    quote: `“To succceed in your life, You need two thing's:- 
    + Ignorance,
    + Confidance. ”`,
  },
  { author: "― Frank Zappa",
     quote: `“So many books, so little time.”` },
  {
    author: "― Marcus Tullius Cicero",
    quote: `“A room without books is like a body without a soul.”`,
  },
  {
    author: "― Eleanor Roosevelt",
    quote: `“A woman is like a tea bag; you never know how strong it is until it's in hot water.”`,
  },
  {
    author: "― Oscar Wilde",
    quote: `“Be yourself; everyone else is already taken.”`,
  },
  {
    author: "― Mark Twain",
    quote: `“If you tell the truth, you don't have to remember anything.”`,
  },
  {
    author: "― Stephen Chbosky",
    quote: `“We accept the love we think we deserve.”`,
  },
  {
    author: "― Ralph Waldo Emerson",
    quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
  },
  {
    author: "― Andre Gide",
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
  },
  {
    author: "― Saleh Selim",
    quote: `“Al-Ahly is above all”`,
  },
];

var lastRandom;

function getRandomQuotes() {
  var random;

  // Repeat Generating Process While lastRandom === random
  do {
    random = Math.floor(Math.random() * ArrOfQuotes.length);
  } while (lastRandom === random);

  lastRandom = random;

  document.getElementById("quote-caption").innerHTML =
    ArrOfQuotes[random].quote;
  document.getElementById("quote-author").innerHTML =
    ArrOfQuotes[random].author;
}
