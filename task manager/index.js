document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const clearButton = document.getElementById("clearButton");
    const emptyMessage = document.querySelector(".empty-message");

    // Функция для обновления состояния интерфейса
    function updateUI() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";
            li.innerHTML = `
                <span>${task.text}</span>
                <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
            `;
            taskList.appendChild(li);
        });

        emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
        clearButton.disabled = tasks.length === 0;
    }

    // Функция для сохранения задач в Local Storage
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Обработчик добавления задачи
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);

        taskInput.value = "";
        updateUI();
    });

    // Обработчик изменения состояния задачи
    taskList.addEventListener("change", (event) => {
        if (event.target.tagName === "INPUT") {
            const index = event.target.dataset.index;
            const tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks[index].completed = event.target.checked;
            saveTasks(tasks);
            updateUI();
        }
    });

    // Обработчик очистки списка задач
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("tasks");
        updateUI();
    });

    // Инициализация интерфейса при загрузке
    updateUI();
});