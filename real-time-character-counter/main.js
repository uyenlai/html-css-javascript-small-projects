const textEl = document.getElementById('textarea');
const totalEl = document.getElementById('total-counter');
const remainingEl = document.getElementById('remaining-counter');

totalEl.innerText = textEl.value.length;
remainingEl.innerText = textEl.getAttribute('maxLength') - textEl.value.length;

textEl.addEventListener('keyup', () => {
    totalEl.innerText = textEl.value.length;
    remainingEl.innerText = textEl.getAttribute('maxLength') - textEl.value.length;
})