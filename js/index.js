
/**
 * Класс, являющийся координатой ячейки на игровом поле.
 * @param {number} x Координата по оси X
 * @param {number} y Координата по оси Y
 */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};


/**
 * Класс, реализующий механику ячейки на игровом поле
 * @param {*} point Координаты в виде класса Point
 */
class Cell {

    constructor(point) {
        this.point = point;
        this.isBusy = false;
        this.isDestroyed = false
    }

    put() {}

    mark() {
        this.isBusy = true;
    }

    destroy() {
        if (this.isBusy) {
            this.isDestroyed = true
        }
    }
};


/**
 * Родительский класс, реализующий механику поля
 */
class Field {
}


/**
 * Класс, реализующий механику поля игрока
 */
class PlayerField extends Field {
}


/**
 * Класс, реализующий механику поля противника
 */
class EnemyField extends Field {
}


const startButton = document.getElementById('start');

startButton.addEventListener('click', () => createFields(startButton))
