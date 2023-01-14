function liveClock() {
    const hourElement = document.getElementById('hours');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('seconds');

    let h = new Date();
    let m = new Date();
    let s = new Date();

    hourElement.innerText = h.getHours();
    if (h.getHours() < 10) {
        hourElement.innerText = '0' + h.getHours();
    }

    minuteElement.innerText = m.getMinutes();
    if (m.getMinutes() < 10) {
        minuteElement.innerText = '0' + m.getMinutes();
    }

    secondElement.innerText = s.getSeconds();

    if (s.getSeconds() < 10) {
        secondElement.innerText = '0' + s.getSeconds();
    }

    setTimeout(() => {
        liveClock();
    }, 1000)
}

liveClock();
