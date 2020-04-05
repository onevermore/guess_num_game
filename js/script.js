'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const randomNum = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const game = function () {
    //Рандомное число
    let myNum = randomNum(1, 100);

    return function checkNumber() {
           
        const guessNum = prompt('Угадай число от 1 до 100');
      if (guessNum === null) {
      alert('Игра завершена');
      return;
      }

        if (isNumber(guessNum)) {          
            const num = +guessNum;
           
            if (num > myNum) {
                alert('Загаданное число меньше');
                checkNumber();
            } else if (num < myNum) {
                alert('Загаданное число больше');
                checkNumber();
            } else {
                const rep = confirm('Вы угадали! Сыграем ещё?');
                if (rep) {
                    game();
                }
            }

        } else {
            alert('Введи число!');
            checkNumber();
        }
    };

};

const gamee = game();
gamee();