function solve(input) {
    let number = Number(input.shift());
    let printLine = '';

    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
        currentNumber = String(currentNumber);
        let toBePrinted = true;

        for (let i = 0; i < currentNumber.length; i++) {
            let digit = Number(currentNumber[i]);

            if (number % digit !== 0) {
                toBePrinted = false;
            }
        }

        if (toBePrinted) {
            printLine += currentNumber + ' ';
        }
    }

    console.log(printLine);
}
solve(
    ['3']
);

// 100/100
/*
Да се напише програма, която чете едно цяло число N, въведено от потребителя  и генерира всички възможни “специални” числа от 1111 до 9999. За да бъде “специалнo” едно число, то трябва да отговаря на следното условие:
•	N да се дели на всяка една от неговите цифри без остатък.
Пример: при N = 16, 2418 е специално число:
•	16 / 2 = 8 без остатък
•	16 / 4 = 4 без остатък
•	16 / 1 = 16 без остатък
•	16 / 8 = 2 без остатък
Вход
Входът се чете от конзолата и се състои от едно цяло число в интервала [1…600000]
Изход
На конзолата трябва да се отпечатат всички “специални” числа, разделени с интервал


*/