function solve([arg1, arg2, arg3]) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let nOperator = arg3;
    let result = 0;
    let output = "";
    if ((n2 === 0) && (nOperator === "/" || nOperator === "%")) {       // В случай на деление на 0 (нула): "Cannot divide {n1} by zero".
        output = ("Cannot divide " + n1 + " by zero");                  // на нула не се дели
    } else if (nOperator === "/") {
        result = (n1 / n2).toFixed(2);
        output = n1 + " " + nOperator + " " + n2 + " = " + result;
    } else if (nOperator === "%") {
        result = n1 % n2;
        output = n1 + " " + nOperator + " " + n2 + " = " + result;
    } else {
        if (nOperator === "+") {
            result = n1 + n2;
        } else if (nOperator === "-") {
            result = n1 - n2;
        } else if (nOperator === "*") {
            result = n1 * n2;
        } output = n1 + " " + nOperator + " " + n2 + " = " + result + (result % 2 == 0 ? " - even" : " - odd"); 
        
    } console.log(output);
}


solve ([10, 1, "-"]);
// result 100/100

/* инфо за 22 ред. / Без използване на тернарен оператор кодът е по-дълъг, но се чете лесно:

let numberIs = ""
    if (result % 2 == 0){
        numberIs = "even"
    } else {
        numberIs = "odd"
    }

С използване на тернарен оператор кодът е много по-кратък, но може да изисква допълнителни усилия, за да бъде прочетен и разбран като логика:
   let nimbeIs = (result % 2 == 0 ? " - even" : " - odd")
*/