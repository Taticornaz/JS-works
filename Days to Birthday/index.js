function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const result = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    const birthdayValue = birthdayInput.value;


    if (!birthdayValue) {
        errorMessage.style.display = 'block';
        result.textContent = '';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const today = new Date();
    const birthday = new Date(birthdayValue);

    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const differenceInTime = birthday - today;

    
    const daysUntilBirthday = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    function getDayDeclension(days) {
        if (days % 10 === 1 && days % 100 !== 11) {
            return "день";
        } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) {
            return "дня";
        } else {
            return "дней";
        }
    }

    result.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${getDayDeclension(daysUntilBirthday)}.`;
}

document.getElementById('birthday').addEventListener('input', function() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
});
