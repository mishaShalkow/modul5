//Задача1 к модулю 5.4 (Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math)
function randomNum (min, max) {
    min = Math.ceil(0);
    max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
}

let str = "Hello"