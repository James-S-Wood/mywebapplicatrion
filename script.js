document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var changeBtn = document.getElementById('changeBtn');

    changeBtn.addEventListener('click', function() {
        messageElement.textContent = 'Message changed!';
    });
});

