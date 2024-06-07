// initial count
let count = 0;

// value
const value = document.querySelector('#value');

// buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const style = event.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
        } else if (style.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "#4CBB16"
        } else if (count < 0) {
            value.style.color = "#C80915"
        } else {
            value.style.color = "#102A42"
        }
        
        value.textContent = count;
    })
})
