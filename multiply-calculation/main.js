const num1 = Math.floor((Math.random() * 10) + 1);
const num2 = Math.floor((Math.random() * 10) + 1);
let correctAns = num1 * num2;

const questionEl = document.getElementById('question');
questionEl.innerText = `What is ${num1} multiply by ${num2}?`
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score')); // localStorage.getItem('score') type is string
                                                       // so have to convert it to a number

/*in order to prevent there is no score in the localStorage then we have another if statement*/
if (!score) {
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', () => {
   const userAns = +inputEl.value; // `+` converts string value to number
   if (userAns === correctAns) {
    score++;
    updateScore();
   }else {
    score--;
    updateScore();
   }
})

function updateScore() {
    localStorage.setItem('score', JSON.stringify(score));
}