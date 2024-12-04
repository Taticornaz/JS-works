document.getElementById("fetch-btn").addEventListener("click", () => {
    const entity = document.getElementById("entity").value;
    const id = document.getElementById("id").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    const loader = document.getElementById("loader");

   
    resultDiv.textContent = "";
    errorDiv.textContent = "";

  
    loader.style.display = "block";

    fetch(`https://swapi.py4e.com/api/${entity}/${id}/`)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            
            loader.style.display = "none";
            resultDiv.textContent = `Название: ${data.name || data.title}`;
        })
        .catch((error) => {
           
            loader.style.display = "none";
            errorDiv.textContent = error === "Ошибка: 404"
                ? "Сущность не найдена"
                : "Сервер недоступен. Попробуйте позже.";
        })
        .finally(() => {
            loader.style.display = "none";
        });
});