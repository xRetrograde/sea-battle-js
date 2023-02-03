class Cell {
    /**
     * Класс, реализующий механику ячейки на игровом поле
     * @param {*} point Координаты в виде класса Point
     */

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
