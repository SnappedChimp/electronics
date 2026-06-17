function showElement(elementName) {
    let textblock = document.getElementById("element-title");
    let descblock = document.getElementById("element-desc");

    switch(elementName) {
        case 'NOT':
            textblock.textContent = "НЕ";
            descblock.textContent = "Логічний елемент, який інвертує вхідний сигнал.";
            break;
        case 'AND':
            textblock.textContent = "І";
            descblock.textContent = "Логічний елемент, який дає вихід 1 лише тоді, коли всі входи 1.";
            break;
        case 'OR':
            textblock.textContent = "АБО";
            descblock.textContent = "Логічний елемент, який дає вихід 1, якщо хоча б один з входів 1.";
            break;
        case 'NAND':
            textblock.textContent = "І-НЕ";
            descblock.textContent = "Логічний елемент, який дає вихід 1 лише тоді, коли не всі входи 1.";
            break;
        case 'NOR':
            textblock.textContent = "АБО-НЕ";
            descblock.textContent = "Логічний елемент, який дає вихід 1 лише тоді, коли не хоча б один з входів 1.";
            break;
        default:
            textblock.innerText = "Помилка";
            descblock.innerText = "Вибрано невідомий елемент.";
    }

    document.getElementById("workspace").style.display = "block";
}

function showAutomata(elementName) {
    let automataTitle = document.getElementById("automata-title");
    let automataDesc = document.getElementById("automata-desc");

    switch(elementName) {
        case 'Trigger':
            automataTitle.textContent = "Тригер";
            automataDesc.textContent = "Тригер - це логічний елемент, який має два стійких стани і може зберігати інформацію про свій стан.";
            // automataImage.src = "images/trigger.png";
            break;
        case 'Register':
            automataTitle.textContent = "Регістр";
            automataDesc.textContent = "Регістр - це логічний елемент, який зберігає інформацію про свій стан.";
            break;
        case 'Counter':
            automataTitle.textContent = "Лічильник";
            automataDesc.textContent = "Лічильник - це логічний елемент, який підраховує кількість імпульсів на вході.";
            break;
        default:
            automataTitle.textContent = "Помилка";
            automataDesc.textContent = "Вибрано невідомий елемент.";
    }

    document.getElementById("automata-info").style.display = "block";
}