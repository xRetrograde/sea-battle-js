function numerateCell(type, node, index) {
    /**
     * Функция нумерации клетки
     * @param {string} type Тип помечаемого символа (number или letter)
     * @param {object} node Клетка, которую необходимо пометить
     * @param {number} index Индекс символа (от A до K, или от 1 до 10)
     */

    const cellNumbers = [...Array(11).keys()];
    const cellLetters = [...Array(11)].map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    const cellContent = document.createElement('div');
    const cellMarker = document.createElement('div');

    node.classList.remove(...node.classList);
    node.classList.add('coordinate-cell');
    cellContent.classList.add('marker__wrapper');
    cellMarker.classList.add('marker');
    cellMarker.innerHTML = {
        number: cellNumbers,
        letter: cellLetters
    }[type][index];

    node.appendChild(cellContent);
    cellContent.appendChild(cellMarker);
}

function generateCells() {
    /**
     * Функция, генерирующая клетки на игровых полях
     */

    const fields = document.getElementsByClassName('field');
    const cellCount = 11;
    let rowCounter = cellCounter = 0;

    for (let x = 0; x < cellCount; x++) {
        for (let y = 0; y < cellCount; y++) {
            const playerCell = document.createElement('div');
            const enemyCell = document.createElement('div');

            playerCell.classList.add('game-cell', 'player-cell');
            enemyCell.classList.add('game-cell', 'enemy-cell')

            playerCell.id = `player_${x}_${y}`;
            enemyCell.id = `enemy_${x}_${y}`;

            fields[0].appendChild(playerCell);
            fields[1].appendChild(enemyCell);

            if (x == 0 && y == 0) {
                playerCell.classList.remove(...playerCell.classList);
                enemyCell.classList.remove(...enemyCell.classList);
            }
            
            // TODO: исправить кринж
            if (x != 0 || y != 0) {
                if (x == 0) {
                    numerateCell('letter', playerCell, rowCounter);
                    numerateCell('letter', enemyCell, rowCounter);
                    rowCounter++;
                }

                if (y == 0) {
                    numerateCell('number', playerCell, cellCounter);
                    numerateCell('number', enemyCell, cellCounter);
                    cellCounter++;
                }
            }
        }
        rowCounter = 0;
    }
}

function createFields(startButton) {
    /**
     * Функция, генерирующая игровые поля
     * @param {object} startButton Кнопка запуска игры
     */

    const fieldSpace = document.getElementById('field-space');
    const playerField = document.createElement('div');
    const enemyField = document.createElement('div');

    playerField.className = enemyField.className = 'field';

    fieldSpace.append(playerField);
    fieldSpace.append(enemyField);

    startButton.value = 'Перезапустить матч';

    generateCells()
}
