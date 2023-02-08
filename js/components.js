const numbers = [...Array(11).keys()];


/**
 * Функция нумерации клетки 
 * @param {markerType} node Тип помечаемого символа (number или letter)
 * @param {number} index Индекс символа (от A до J, или от 1 до 10)
 */
function markCell(markerType, index) {
  const textNode = document.createTextNode(
    (markerType == "number"
      ? numbers
      : numbers.map((_, i) => String.fromCharCode("A".charCodeAt(0) + i)))[
      index
    ]
  );

  const markWraper = document.createElement("div");
  markWraper.classList.add("marker");
  markWraper.appendChild(textNode);

  return markWraper;
}

/**
 * Функция, генерирующая игровые поля
 */
function createFields() {
  const fieldSpace = document.getElementById("field-space");

  for (let fieldNumber = 0; fieldNumber < 2; fieldNumber++) {
    const fieldType = fieldNumber ? "enemy" : "player";
    const field = document.createElement("div");

    field.classList.add("field", `${fieldType}-field`);
    fieldSpace.appendChild(field);

    for (let x = 0; x < 11; x++) {
      for (let y = 0; y < 11; y++) {
        const currentCell = document.createElement("div");

        if ((!x && y) || (x && !y)) {
          const markerType = x == 0 ? "number" : "letter";
          const node = markCell(markerType, markerType == "number" ? y : x - 1);
          currentCell.appendChild(node);
        } else if (x && y) {
          currentCell.id = `${fieldType}_${x}_${y}`;
          currentCell.classList.add("game-cell", `${fieldType}-cell`);
        }

        field.appendChild(currentCell);
      }
    }
  }
}
