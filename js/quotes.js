const quotes = [
  {
    quote:
      'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.',
    author: 'Oprah Winfrey',
  },
  {
    quote:
      "It's the time that you spent on your rose that makes your rose to important.",
    author: '<The Litte Prince>',
  },
  {
    quote:
      "If you come at four in the afternoon. I'll begin to be happy by three.",
    author: '<The Litte Prince>',
  },
  {
    quote: 'The whole life of man is but a point of time; let us enjoy it.',
    author: 'Plutarch',
  },
  {
    quote:
      "You can't focus on what's going wrong. There's always a way to turn things around, to find the fun.",
    author: 'Inside Out',
  },
  {
    quote: "You can't love someone if you don't love yourself first.",
    author: 'Beauty And The Beast ',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/* const quoteArea = document.querySelector("#quote");
const quoteBtn = document.querySelector("#quote-btn");

function quoteBtnClick(event) {
  event.preventDefault();
  quoteArea.classList.toggle(HIDDEN_CLASSNAME);
}

quoteBtn.addEventListener("click", quoteBtnClick); */
