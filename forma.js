document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const data = new FormData(form);
        const url = 'https://your-server-url.com/form-handler'; // Замените на URL вашего обработчика форм

        fetch(url, {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Спасибо за ваше сообщение!');
                nameInput.value = '';
                emailInput.value = '';
                messageTextarea.value = '';
            } else {
                alert('Произошла ошибка при отправке сообщения.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
    });
});