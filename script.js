document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var changeBtn = document.getElementById('changeBtn');

    changeBtn.addEventListener('click', function() {
        messageElement.textContent = 'Message changed!';
    });
    var counterElement = document.getElementById('counter');
    var incrementBtn = document.getElementById('incrementBtn');
    var resetBtn = document.getElementById('resetBtn');
    var counterValue = 0;

    incrementBtn.addEventListener('click', function() {
        counterValue++;
        counterElement.textContent = counterValue;
    });

    resetBtn.addEventListener('click', function() {
        counterValue = 0;
        counterElement.textContent = counterValue;
    });


});

