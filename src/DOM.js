import { Ship, gameBoard } from "./gameElements.js";

const container = document.querySelector(".container");
const playerBoard = document.createElement("div");
const computerBoard = document.createElement("div");
const randmBtn = document.createElement("button");
const playerContainer = document.createElement("div");
const computerContainer = document.createElement("div");
randmBtn.classList.add("randmBtn");
playerContainer.classList.add("playerContainer");
computerContainer.classList.add("computerContainer");
playerContainer.append(playerBoard);
computerContainer.append(computerBoard);
playerBoard.classList.add("playerBoard");
computerBoard.classList.add("computerBoard");
container.append(playerContainer, computerContainer);

for (let i = 0; i < 10; i++) {
  const playerRow = document.createElement("div");
  playerRow.classList.add("row");
  const computerRow = playerRow.cloneNode();
  playerRow.id = `playerRow${i}`;
  computerRow.id = `computerRow${i}`;
  for (let j = 0; j < 10; j++) {
    const playerCell = document.createElement("div");
    const computerCell = playerCell.cloneNode();
    computerCell.classList.add("cell");
    playerCell.classList.add("cell");
    playerCell.id = `playerCell${j}`;
    computerCell.id = `computerCell${j}`;
    playerRow.append(playerCell);
    computerRow.append(computerCell);
  }
  playerBoard.append(playerRow);
  computerBoard.append(computerRow);
}
