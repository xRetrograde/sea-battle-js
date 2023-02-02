function numerateCell(type, node, index) {
    const columnNumbers = [...Array(5).keys()];
    const columnLetters = [...Array(10)].map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
}

function generateCells() {
    const fields = document.getElementsByClassName('field');
    const cellCount = 11;

    for (let x = 0; x < cellCount; x++) {
        for (let y = 0; y < cellCount; y++) {
            const playerCell = document.createElement('div');
            const enemyCell = document.createElement('div');

            fields[0].appendChild(playerCell);
            fields[1].appendChild(enemyCell);

            playerCell.classList.add('cell', 'player-cell');
            enemyCell.classList.add('cell', 'enemy-cell')

            playerCell.id = `player_${x}_${y}`;
            enemyCell.id = `enemy_${x}_${y}`;
        }
    }
}

function createElements(startButton) {
    const fieldSpace = document.getElementById('field-space');
    const playerField = document.createElement('div');
    const enemyField = document.createElement('div');

    playerField.className = enemyField.className = 'field';

    fieldSpace.append(playerField);
    fieldSpace.append(enemyField);

    startButton.value = 'Перезапустить матч';

    generateCells()
}
