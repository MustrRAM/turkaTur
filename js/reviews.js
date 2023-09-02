document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    sendReviewToTelegram(name, review);
});

function sendReviewToTelegram(name, review) {
    const botToken = '6680524817:AAGGQMrRPda_JxBsJgScsj_E-IF0UyK2-0c';
    const chatId = '917737025';

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: `Имя: ${name}\nОтзыв: ${review}`,
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            alert('Отзыв успешно отправлен в Telegram!');
            // Дополнительные действия, если необходимо
        } else {
            alert('Ошибка при отправке отзыва в Telegram.');
        }
    })
    .catch(error => {
        console.error('Произошла ошибка при отправке:', error);
        alert('Произошла сетевая ошибка при отправке отзыва.');
    });
}