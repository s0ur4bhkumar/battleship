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

function gameOn(computer, computerBoard, player, playerBoard) {
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
        console.log(cell.ship);
        if (computer.allShipsSunk()) {
          alert("you won");
        }
        // return true;
      } else {
        let a = true
        while (a) {
          a = computerAction(player,playerBoard)
        }
        cell.textContent = "missed";
      }
    });
  });
}

function computerAction(player, playerBoard, computer, computerBoard) {
  if (player === undefined || playerBoard === undefined) {
    return;
  }
  const randomCell = Math.floor(Math.random() * 100);
  const cells = playerBoard.querySelectorAll(".cell");
  if (cells[randomCell].ship) {
    if (player.allShipsSunk()) {
      alert("you lost");
    }
    cells[randomCell].ship.hit();
    cells[randomCell].style.backgroundColor = "red";
    return true;
  } else {
    cells[randomCell].textContent = "missed";
    return false
  }
}

export { cellFill, markPlayerShip, computerAction, gameOn};
