//Task 1
// let userName = prompt("Введите ваше имя:");
// alert("Привет, " + userName + "!");

//Task 2
// let userBirthday = prompt("Введите год своего рождения:");
// const currentYear = 2024;
// alert((currentYear - userBirthday));

//Task 3
// let squareLength = prompt("Введите  длину стороны квадрата:");
// alert((4 * squareLength));

//Task 4
// let circleRadius = prompt("Введите  радиус окружности:");
// alert((2 * circleRadius * 3.14));

//Task 5
// let distance = prompt("Введите расстояние в км:");
// let time = prompt("Введите время в часах:");
// alert((distance / time));

//Task 6
// let dollar = prompt("Введите доллары:");
// const dollarToEuro = 0.92;
// alert((dollar * dollarToEuro));

//Task 7
// let capacity = prompt("Введите объём:");
// let file = 820;
// alert(((capacity * 1024)/ 820 ));


//Task 8
// let money = prompt("Введите сумму денег в вашем кошельке:");
// let pricePerChocolate = prompt("Введите цену одной шоколадки:");
// let chocolates = Math.floor(money / pricePerChocolate);
// let change = money % pricePerChocolate;
// alert("Вы можете купить " + chocolates + " шоколадок и у вас останется " + change.toFixed(2) + " сдачи.");

//Task 9
// let number = prompt("Введите число:");
// let hundreds = Math.floor(number / 100); 
// let tens = Math.floor((number % 100) / 10); 
// let units = number % 10;
// let reversedNumber = (units * 100) + (tens * 10) + hundreds;
// alert(reversedNumber);

//Task 10
let number = prompt("Введите число:");
let residual = number % 2;
(residual == 0 && alert("Чётное число"));
(residual == 1 && alert("Нечётное число"));

