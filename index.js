const askQuestions = require("./lib/askQuestions");

// Number between 1 and 10;
const randomNumber = Math.floor(Math.random() * 11);
const fact = (num) => `${randomNumber} * ${num} = `;
const stringifyAnswer = (num) => (randomNumber * num).toString();

const questions = [
  {
    question: fact(1),
    answer: stringifyAnswer(1),
  },
  {
    question: fact(2),
    answer: stringifyAnswer(2),
  },
  {
    question: fact(3),
    answer: stringifyAnswer(3),
  },
  {
    question: fact(4),
    answer: stringifyAnswer(4),
  },
  {
    question: fact(5),
    answer: stringifyAnswer(5),
  },
  {
    question: fact(6),
    answer: stringifyAnswer(6),
  },
  {
    question: fact(7),
    answer: stringifyAnswer(7),
  },
  {
    question: fact(8),
    answer: stringifyAnswer(8),
  },
  {
    question: fact(9),
    answer: stringifyAnswer(9),
  },
  {
    question: fact(10),
    answer: stringifyAnswer(10),
  },
];

const done = (answers) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;

  answers.forEach((answer, index) => {
    if (questions[index].answer === answer) {
      correctAnswers++;
    } else  {
      wrongAnswers++;
    }
  });
  process.stdout.write(`You got ${correctAnswers} answers right and ${wrongAnswers} answers wrong.\n`);
  process.exit();
}

askQuestions(questions, (done));
