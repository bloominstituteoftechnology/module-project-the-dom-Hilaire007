const { nouns } = require("./data");

function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div");
  widgets.forEach((widget, idx) => {
    widget.classList.add("widget");
    widget.setAttribute("tabindex", idx + 1 + "");
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const someIndex = Math.floor(Math.random() * quotes.length);
  const someQuote = quotes[someIndex];
  const quote = document.createElement("div");
  const quoteText = someQuote.quote;
  quote.textContent = quoteText;
  const firstWidget = document.querySelector(".quoteoftheday");
  firstWidget.appendChild(quote);

  const authorDate = document.createElement("div");
  const { author, date } = someQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  firstWidget.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const firstRandomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const secondRandomVerb = verbs[Math.floor(Math.random() * verbs.length)];

  const firstRandomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  const secondRandomAdverb =
    adverbs[Math.floor(Math.random() * adverbs.length)];

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];

  const words = `We need to ${firstRandomVerb} our ${randomNoun1} ${firstRandomAdverb} in order to ${secondRandomVerb} our ${randomNoun2} ${secondRandomAdverb}.`;
  const paragraph = document.createElement("p");
  paragraph.textContent = words;
  document.querySelector(".corporatespeak").appendChild(paragraph);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown");
  let count = 5;
  const countdown = document.createElement("p");
  countdown.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countdown);

  setInterval(() => {
    if (count === 1) {
      countdown.textContent = "Liftoff! 🚀";
    } else {
      count--;
      countdown.textContent = `T-minus ${count}...`;
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement("p");
  document.querySelector(".friends").appendChild(personParagraph);
  const year = person.dateOfBirth.split("-")[0];
  let sentence =
    (personParagraph.textContent = `${person.fname} ${person.lname} was born in ${year} and `);

  if (!person.friends.length) {
    sentence += "has no friends.";
  } else {
    sentence += "is friends with ";
    for (let i = 0; i < person.friends.length; i++) {
      const friendId = person.friends[i];
      const friend = people.find((p) => p.id === friendId);
      const fullName = `${friend.fname} ${friend.lname}`;
      let isLastIndex = i === person.friends.length - 1;
      let isNextToLastIndex = i === person.friends.length - 2;
      if (isLastIndex) {
        sentence += `${fullName}.`;
      } else if (isNextToLastIndex) {
        sentence += `${fullName} and `;
      } else {
        sentence += `${fullName}, `;
      }
    }
  }
  personParagraph.textContent = sentence;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();
