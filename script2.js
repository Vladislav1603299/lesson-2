alert("Задание 5");

start()


function start() {
    let start = prompt("Хочешь произвести несколько вычислений одновременно?");
    if (start == "нет") {
        return;

    }
    condition();
}





function condition() {
    alert("Произведем вычисление суммы, произведения, разности и деления чисел")
    const number1 = +prompt("Введите первое число");
    const number2 = +prompt("Введите второе число");

    play(number1, number2);

    play2(number1, number2);

    play3(number1, number2);

    play4(number1, number2);

}


function play(value1, value2) {
    sum = value1 + value2;
    document.write("<br> По заданию 5 (сумма) <br> Ответ: " + sum)

}

function play2(value1, value2) {
    sum = value1 * value2;
    document.write("<br> По заданию 5 (произведение) <br> Ответ: " + sum)

}

function play3(value1, value2) {
    sum = value1 - value2;
    document.write("<br> По заданию 5 (разность) <br> Ответ: " + sum)

}

function play4(value1, value2) {
    sum = value1 / value2;
    document.write("<br> По заданию 5 (деление) <br> Ответ: " + sum)

}




alert("Задание 6");

let value1 = +prompt("Введите первое число");
let value2 = +prompt("Введите второе число");

mathOperation(value1, value2, play5(value1, value2))


function play5(value1, value2) {
    sum = value1 + value2;
    document.write("<br> По заданию 6 (сумма) <br> Ответ: " + sum)
    document.write(" <br> Задание 6 полностью не понял, сделал по своему, при проверке посмотреть на код и указать ошибки!")

}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case -1:
            document.write(arg1 * arg2)
    }
}









