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
function showCombSircuit(elementName) {
    let combTitle = document.getElementById("comb-circuit-title");
    let combDesc = document.getElementById("comb-circuit-desc");

    switch(elementName) {
        case 'Multiplexer':
            combTitle.textContent = "Мультиплексор";
            combDesc.textContent = "Мультиплексор - це логічний елемент, який вибирає один з декількох входів і передає його на вихід.";
            break;
        case 'Demultiplexer':
            combTitle.textContent = "Демультиплексор";
            combDesc.textContent = "Демультиплексор - це логічний елемент, який розподіляє вхідний сигнал на один з декількох виходів.";
            break;
        case 'Sumator':
            combTitle.textContent = "Суматор";
            combDesc.textContent = "Суматор - це логічний елемент, який виконує операцію додавання двох бітів.";
            break;
            case 'Comparator':
            combTitle.textContent = "Компаратор";
            combDesc.textContent = "Компаратор - це логічний елемент, який порівнює два біти.";
            break;
        default:
            combTitle.textContent = "Помилка";
            combDesc.textContent = "Вибрано невідомий елемент.";
    }
    document.getElementById("circuit-info").style.display = "block";
}

//функція для зміни фону сторінки
function getRandomColor() {
    let randomNum = Math.floor(Math.random() * 16777215);
    let HexString = randomNum.toString(16);
    return "#" + HexString.padStart(6, '0');
}

function changeBackgroundColor() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    let color3 = getRandomColor();
let newBackground = `radial-gradient(circle at 100% 100%, ${color1}26 20%, ${color2}0D 40%, ${color3}26 80%, #000000 100%)`;
    document.body.style.backgroundImage = newBackground;
}

changeBackgroundColor();