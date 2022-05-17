const quotes = [
  {
    quote:
    "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
    author: "Oprah Winfrey",
  },
  {
    quote: "헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.",
    author: "aaa",
  },
  {
    quote: "국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.",
    author: "bbb",
  },
  {
    quote: "대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.",
    author: "ccc",
  },
  {
    quote: "대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.",
    author: "ddd",
  },
  {
    quote: "여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.",
    author: "eee",
  },
  {
    quote: "정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
    author: "fff",
  },
  {
    quote: "국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.",
    author: "ggg",
  },
  {
    quote: "모든 국민은 거주·이전의 자유를 가진다. 군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다.",
    author: "hhh",
  },
  {
    quote: "공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.",
    author: "iii",
  }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;