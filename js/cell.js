class Cell {
    constructor(pointX, pointY) {
        this.pointX = pointX;
        this.pointY = pointY;
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
