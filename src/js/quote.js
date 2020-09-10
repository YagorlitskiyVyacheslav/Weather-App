    const quoteText = document.querySelector('.quote__text');
    const quoteAuthor = document.querySelector('.quote__author');

const quoteArr = [
  {
    text:
      'Climate is what we expect, weather is what we get.',
    author:
      'Mark Twain'
  },
  {
    text:
      'There`s no such thing as bad weather, just soft people.',
    author:
      'Bill Bowerman'
  },
  {
    text:
      'I love the rain, it can hide my tears.',
    author:
      'JS programmer'
  },
  {
    text:
      'Bad weather always looks worse through a window.',
    author:
      'Tom Lehrer'
  },
  {
    text:
      'In the Spring, I have counted 136 different kinds of weather inside of 24 hours.',
    author:
      'Mark Twain'
  }];

function randomQuote(quoteArr) {

    const randomNumber = Math.floor(Math.random() * quoteArr.length);
 
    const author = quoteArr[randomNumber].author;
    const text = quoteArr[randomNumber].text;

    quoteAuthor.textContent = author;
    quoteText.textContent = text; 
}

randomQuote(quoteArr)

setInterval(() => randomQuote(quoteArr), 7000);




