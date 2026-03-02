function cellFill(player, cell) {
  if (player !== " " && !Number.isInteger(player)) {
    cell.ship = player;
  }
}

function markPlayerShip(cell) {
  if (cell.ship) {
    cell.style.backgroundColor = "blue";
  }
}

function playerAction(computer, computerBoard) {
  console.log("player's turn");
  if (computer === undefined || computerBoard === undefined) {
    return;
  }
  const cells = computerBoard.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.ship) {
        cell.ship.hit();
        cell.style.backgroundColor = "red";
        cell.inert = true;
        if (computer.allShipsSunk()) {
          alert("you won");
          return "you won";
        }
        console.log(cell.ship);
        return 'is hit';
      } else {
        cell.textContent = "missed";
        return 'is missed';
      }
    });
  });
}

function computerAction(player, playerBoard) {
  console.log("computer's turn");
  if (player === undefined || playerBoard === undefined) {
    return;
  }
  const randomCell = Math.floor(Math.random() * 100);
  const cells = playerBoard.querySelectorAll(".cell");
  if (cells[randomCell].ship) {
    cells[randomCell].ship.hit();
    cells[randomCell].style.backgroundColor = "red";
    if (player.allShipsSunk()) {
      alert("you lost");
      return "you lost";
    }
    return 'is hit';
  } else {
    cells[randomCell].textContent = "missed";
    return 'is missed'
  }
}

function gameOn(computer, computerBoard, player, playerBoard, activePlayer = 'player') {
  if (activePlayer === 'player') {
    playerAction(computer,computerBoard)
  }
  if (activePlayer === 'computer') {
    computerAction(player,playerBoard)
  }
  if (playerAction(computer, computerBoard) === 'you won') {
    return
  }
  if (computerAction(player, playerBoard) === 'you lost') {
    return
  }
  if (playerAction(computer, computerBoard) === 'is hit') {
    return gameOn(computer, computerBoard, player, playerBoard, activePlayer = 'player')
  }
  if (computerAction(player, playerBoard) === 'is hit') {
    return gameOn(computer, computerBoard, player, playerBoard, activePlayer = 'computer')
  }
}

export { cellFill, markPlayerShip, playerAction, computerAction, gameOn };
