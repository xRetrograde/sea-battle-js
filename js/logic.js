class Cell {
  #isBusy = false;
  #isMarked = false;
  #isDestroyed = false;

  constructor(node) {
    this.node = node;
  }

  put() {
    if (!this.#isBusy && !this.#isMarked) {
      this.node.innerHTML = "!";
      this.#isBusy = true;
    }
  }

  mark() {
    if (!this.#isMarked && this.#isBusy) {
      this.#isDestroyed = true;
    }

    this.#isMarked = true;
    this.node.innerHTML = this.#isDestroyed ? "D" : "E";
  }
}

class Ship {
  constructor(length) {
    this.length = length;
  }

  set length(value) {
    if (!(value in [...Array(4).keys()])) {
      this.length = 1;
    }

    this.length = value;
  }
}

class Field {
  constructor(cells, uid) {
    this.cells = cells;
    this.uid = Symbol(uid);
  }

  generateShips() {}

  openCell() {}
}
