let agoQueue = [];
let pmsQueue = [];

function updateDisplay() {
    updateQueue('ago', agoQueue);
    updateQueue('pms', pmsQueue);
}

function updateQueue(type, queue) {
    const queueElement = document.getElementById(`${type}Queue`);
    const numbers = queueElement.getElementsByClassName('number');
    for (let i = 0; i < 2; i++) {
        numbers[i].textContent = queue[i] || '---';
    }
}

function next(type) {
    const queue = type === 'ago' ? agoQueue : pmsQueue;
    if (queue.length > 0) {
        queue.shift();
        updateDisplay();
    }
}

function addVehicle() {
    const input = document.getElementById('vehicleInput');
    const value = input.value.trim();
    if (value.length === 6) {
        const type = value.substring(0, 3).toUpperCase();
        const number = value.substring(3);
        if (type === 'AGO' && !agoQueue.includes(number)) {
            agoQueue.push(number);
            updateDisplay();
            input.value = '';
        } else if (type === 'PMS' && !pmsQueue.includes(number)) {
            pmsQueue.push(number);
            updateDisplay();
            input.value = '';
        } else {
            alert('Invalid input or duplicate number!');
        }
    } else {
        alert('Invalid input format. Please use AGOXXX or PMSXXX format.');
    }
}

document.getElementById('agoNext').addEventListener('click', () => next('ago'));
document.getElementById('pmsNext').addEventListener('click', () => next('pms'));
document.getElementById('addVehicle').addEventListener('click', addVehicle);

updateDisplay();
