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
        let a = true;
        while (a) {
          a = computerAction(player, playerBoard);
        }
        cell.textContent = "missed";
      }
    });
  });
}
function guess(randomCell,cells) {
  let guessList = ["left", "right", "up", "down"];
  let guess = guessList[Math.floor((Math.random(0, 0.4) * 10) / 3)];
  let guessedCell;
  if (cells[randomCell - 1] === ' ' || cells[randomCell + 1] === ' ') {
    let randNumber = Math.round(Math.random())
    
  }
  else {
    
  }
  if (guess === "left") {
    if (randomCell > 10) {
      console.log("left randomcell%10: ", randomCell % 10);
      guessedCell = randomCell - 10;
      return guessedCell;
    }
  } else if (guess === "right") {
    if (Math.round(randomCell / 10) !== 9) {
      guessedCell = randomCell + 10;
      return guessedCell;
    }
  } else if (guess === "up") {
    if (randomCell % 10 !== 0) {
      guessedCell = randomCell - 1;
      return guessedCell;
    }
  } else {
    if (randomCell % 10 !== 9) {
      guessedCell = randomCell + 1;
      return guessedCell;
    }
  }
}
function computerAction(player, playerBoard) {
  if (player === undefined || playerBoard === undefined) {
    return;
  }
  const randomCell = Math.floor(Math.random() * 100);
  const cells = playerBoard.querySelectorAll(".cell");
  if (
    cells[randomCell].textContent !== "missed" &&
    cells[randomCell].textContent !== "destroyed"
  ) {
    if (cells[randomCell].ship) {
      if (player.allShipsSunk()) {
        alert("you lost");
      }
      cells[randomCell].ship.hit();
      let boolean = true;
      while (boolean) {
        let guessedCell = guess(randomCell);
        if (cells[guessedCell]) {
          console.log("guessed cell is: ", guessedCell);
          while (cells[guessedCell].ship) {
            cells[guessedCell].ship.hit();
            cells[guessedCell].style.backgroundColor = "red";
            cells[guessedCell].textContent = "destroyed";
            guessedCell = guess(guessedCell);
          }
          cells[guessedCell].textContent = "guessed";
          boolean = false;
        }
        boolean = false;
      }
      console.log("the ship hit: ", randomCell);
      cells[randomCell].style.backgroundColor = "red";
      cells[randomCell].textContent = "destroyed";
      return true;
    } else {
      cells[randomCell].textContent = "missed";
      return false;
    }
  }
}
export { cellFill, markPlayerShip, computerAction, gameOn };
