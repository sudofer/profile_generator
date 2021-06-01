const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ansArr = [];



const promptArr = [
  'What\'s your name? Nicknames are also acceptable :)',
 'What\'s an activity you like doing?',
 'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
   'Which sport is your absolute favourite?',
    'What is your superpower? In a few words, tell us what you are amazing at!'
  ];


const recurse = (question, questionIndex) => {

rl.question(`${question[questionIndex]}\n`, (answer) => {
  // TODO: Log the answer in a database
  ansArr.push(answer);
  questionIndex++;
      
      if (questionIndex === question.length-1){
        rl.close();
        return console.log(`${ansArr[0]} likes ${ansArr[1]} while listening to ${ansArr[2]}. After that he'll usually eat some ${ansArr[3]}, hopefully ${ansArr[4]}...after that, if he had any energy left, he would go play some ${ansArr[5]}.`);
      }
      recurse(question, questionIndex);
    })};
  
  
  
    recurse(promptArr, 0);
    
