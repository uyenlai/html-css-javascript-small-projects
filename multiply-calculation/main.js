const num1 = Math.floor((Math.random() * 10) + 1);
const num2 = Math.floor((Math.random() * 10) + 1);
let correctAns = num1 * num2;

const question = document.getElementById('question');
question.innerText = `What is ${num1} multiply by ${num2}?`
const btn = document.querySelector('.btn');
const userAns = document.getElementById('input');
console.log(userAns);

btn.addEventListener('click', () => {

})