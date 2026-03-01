import {Ship,gameBoard} from './gameElements.js'

const container = document.querySelector(".container");
const playerBoard = document.createElement("div");
const computerBoard = document.createElement("div");
playerBoard.classList.add("playerBoard");
computerBoard.classList.add("computerBoard");
container.append(playerBoard, computerBoard);

for (let i = 0; i < 10; i++) {
  const playerRow = document.createElement("div");
  playerRow.classList.add("row");
  const computerRow = playerRow.cloneNode();
  playerRow.id = `playerRow${i}`
  computerRow.id = `computerRow${i}`
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell${j}`;
    playerRow.append(cell);
    computerRow.append(cell.cloneNode())
  }
  playerBoard.append(playerRow);
  computerBoard.append(computerRow);
}
