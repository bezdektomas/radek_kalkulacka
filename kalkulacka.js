document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            const type = button.getAttribute('data-type');

            if (type === 'clear') {
                clearDisplay();
            } else if (type === 'delete') {
                deleteLast();
            } else if (type === 'equals') {
                calculateResult();
            } else if (type === 'factorial') {
                calculateFactorial();
            } else if (value) {
                appendToDisplay(value);
            }
        });
    });

    display.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            calculateResult();
        } else if (event.key === 'Backspace') {
            deleteLast();
        }
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }

    function calculateFactorial() {
        const number = parseInt(display.value, 10);
        if (isNaN(number) || number < 0) {
            display.value = 'Error';
            return;
        }
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        display.value = factorial;
    }
});
