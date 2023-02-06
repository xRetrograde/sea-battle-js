/**
 * Функция нумерации клетки 
 * @param {object} cell Клетка, которую необходимо пометить
 * @param {markerType} node Тип помечаемого символа (number или letter)
 * @param {number} index Индекс символа (от A до J, или от 1 до 10)
 */

function markCell(cell, markerType, index) {
  const numbers = [...Array(11).keys()];
  const markText = document.createTextNode(
    (markerType == "number"
      ? numbers
      : numbers.map((_, i) => String.fromCharCode("A".charCodeAt(0) + i)))[
      index
    ]
  );

  const mark = document.createElement("div");

  mark.classList.add("marker");
  mark.appendChild(markText);

  cell.appendChild(mark);
}

/**
 * Функция, генерирующая игровые поля
 */

function createFields() {
  const fieldSpace = document.getElementById("field-space");

  for (let fieldNumber = 0; fieldNumber < 2; fieldNumber++) {
    const fieldType = fieldNumber ? "enemy" : "game";
    const field = document.createElement("div");

    field.classList.add("field", `${fieldType}-field`);
    fieldSpace.appendChild(field);

    for (let x = 0; x < 11; x++) {
      for (let y = 0; y < 11; y++) {
        const cell = document.createElement("div");

        if ((!x && y) || (x && !y)) {
          const markerType = !x ? "number" : "letter";
          markCell(cell, markerType, markerType == "number" ? y : x - 1);
        } else if (x && y) {
          cell.id = `${fieldType}-field_${x}_${y}`;
          cell.classList.add("game-cell", `${fieldType}-cell`);
        }

        field.appendChild(cell);
      }
    }
  }
}
