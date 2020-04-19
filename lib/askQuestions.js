const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestions = (questions, done) => {
  let answers = [];
  const questionsAndAnswers = (answer) => {
    answers.push(answer.trim());

    if (answers.length < questions.length) {
      rl.question(questions[answers.length].question, questionsAndAnswers);
    } else {
      rl.close();
      done(answers);
    }
  }

  rl.question(questions[0].question, questionsAndAnswers);
}

module.exports = askQuestions;
