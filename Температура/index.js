function getTemperatures() {
    const cities = ["Москва", "Санкт-Петербург", "Ярославль", "Новосибирск", "Кострома"];
    const temperatures = [];

    let maxTemp = -Infinity;
    let minTemp = Infinity;

    for (let i = 0; i < cities.length; i++) {
        let temp = Number(prompt(`Введите температуру для города ${cities[i]} (в градусах Цельсия):`));

    
        if (!isNaN(temp)) {
            temperatures.push(temp);

        
            if (temp > maxTemp) maxTemp = temp;
            if (temp < minTemp) minTemp = temp;
        } else {
            alert("Пожалуйста, введите корректное число!");
            return; 
        }
    }

    
    displayTemperatures(cities, temperatures, maxTemp, minTemp);
}

function displayTemperatures(cities, temperatures, maxTemp, minTemp) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Температуры по городам:</h2>';
    
    let list = '<ul>';
    for (let i = 0; i < cities.length; i++) {
        list += `<li>${cities[i]}: ${temperatures[i]}°C</li>`;
    }
    list += '</ul>';

    resultDiv.innerHTML += list;
    resultDiv.innerHTML += `<p><strong>Максимальная температура:</strong> ${maxTemp}°C</p>`;
    resultDiv.innerHTML += `<p><strong>Минимальная температура:</strong> ${minTemp}°C</p>`;
}


