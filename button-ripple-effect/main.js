const btnEL = document.querySelector('.btn');

btnEL.addEventListener('mouseover', function(e) {
   const x = e.pageX - btnEL.offsetLeft;
   const y = e.pageY - btnEL.offsetTop;

   btnEL.style.setProperty('--xPos', x + 'px');
   btnEL.style.setProperty('--yPos', y + 'px');

})