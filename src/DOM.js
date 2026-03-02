import { Ship, gameBoard } from "./gameElements.js";
import {
  cellFill,
  markPlayerShip,
  computerAction,
  gameOn
} from "./DOMHelperFn.js";

// ************************************************DOM MANIPULATION************************************************
const player = gameBoard();
const computer = gameBoard();
const container = document.querySelector(".container");
const playerBoard = document.createElement("div");
const computerBoard = document.createElement("div");
const randmBtn = document.createElement("button");
const playerContainer = document.createElement("div");
const computerContainer = document.createElement("div");
player.randomPlaceShip();
computer.randomPlaceShip();
randmBtn.classList.add("randmBtn");
randmBtn.textContent = "Randomize";
playerContainer.classList.add("playerContainer");
computerContainer.classList.add("computerContainer");
playerContainer.append(playerBoard, randmBtn);
computerContainer.append(computerBoard);
playerBoard.classList.add("playerBoard");
computerBoard.classList.add("computerBoard");
container.append(playerContainer, computerContainer);

for (let i = 0; i < 10; i++) {
  const playerRow = document.createElement("div");
  playerRow.classList.add("row");
  const computerRow = playerRow.cloneNode();
  for (let j = 0; j < 10; j++) {
    const playerCell = document.createElement("div");
    const computerCell = playerCell.cloneNode();
    computerCell.classList.add("cell", "computerCell");
    playerCell.classList.add("cell", "playerCell");
    cellFill(player.board[i][j], playerCell);
    cellFill(computer.board[i][j], computerCell);
    markPlayerShip(playerCell);
    playerRow.append(playerCell);
    computerRow.append(computerCell);
  }
  playerBoard.append(playerRow);
  computerBoard.append(computerRow);
}

gameOn(computer,computerBoard,player,playerBoard)
