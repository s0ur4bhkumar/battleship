const Ship = (length = 1) => {
  let hitCount = 0;
  return {
    length: length <= 4 && length !== 0 ? length : null,
    hitCount: hitCount,
    hit() {
      this.hitCount++;
    },
    isSunk() {
      if (this.hitCount === this.length) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const gameBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push(j);
    }
    board.push(row);
  }
  function topPrefix(x, y, ship, layout) {
    if (layout === "horizontal") {
      if (board[x - 1]) {
        if (board[x - 1][y - 1]) {
          board[x - 1][y - 1] = " ";
        }
        for (let i = 0; i <= ship.length; i++) {
          if (y + i >= 10) {
            return;
          }
          board[x - 1][y + i] = " ";
        }
      }
      return;
    }
    if (!isTopRow(x, y)) {
      board[x - 1][y] = " ";
      if (!isBottomRow(x, y) && !isLeftMostColoumn(x, y)) {
        board[x - 1][y - 1] = " ";
      }
      if (isRightMostColumn(x, y)) {
        board[x - 1][y - 1] = " ";
        return;
      }
      board[x - 1][y + 1] = " ";
    }
  }
  function bottomSuffix(x, y, ship, layout) {
    if (layout === "horizontal") {
      if (board[x + 1]) {
        if (board[y - 1]) {
          board[x + 1][y - 1] = " ";
        }
        let i = 0;
        while (i <= ship.length) {
          if (board[y + i]) {
            board[x + 1][y + i] = " ";
          }
          i++;
        }
      }
      return;
    }
    if (board[x + ship.length]) {
      board[x + ship.length][y] = " ";
      if (!isLeftMostColoumn(x, y)) {
        board[x + ship.length][y - 1] = " ";
      }
      if (board[y + 1]) {
        board[x + ship.length][y + 1] = " ";
        return;
      }
    }
  }
  function leftPrefix(x, y, ship, layout) {
    if (layout === "vertical") {
      if (board[y - 1]) {
        let i = 0;
        while (i < ship.length) {
          board[x + i][y - 1] = " ";
          i++;
        }
      }
      return;
    }
    if (board[y - 1]) {
      board[x][y - 1] = " ";
    }
    return;
  }
  function rightSuffix(x, y, ship, layout) {
    if (layout === "vertical") {
      if (board[y + 1]) {
        for (let i = 0; i < ship.length; i++) {
          board[x + i][y + 1] = " ";
        }
      }
      return;
    }
    if (y + ship.length >= 10) {
      return;
    } else {
      board[x][y + ship.length] = " ";
    }
  }
  function isTopRow(x, y) {
    return x === 0;
  }
  function isBottomRow(x, y) {
    return x === 9;
  }
  function isLeftMostColoumn(x, y) {
    return y === 0;
  }
  function isRightMostColumn(x, y) {
    return y === 9;
  }
  function placeCheck(x, y, ship, layout) {
    if (layout === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (!Number.isInteger(board[x][y + i])) {
          return false;
        }
        return true;
      }
    }
    for (let i = 0; i < ship.length; i++) {
      if (!Number.isInteger(board[x + i][y])) {
        return false;
      }
      return true;
    }
  }
  function randomAlign() {
    let key = Math.round(Math.random(0, 1));
    if (key === 0) {
      return "horizontal";
    }
    return "vertical";
  }
  return {
    board: board,
    placeShip(x, y, ship = Ship(), layout = "horizontal") {
      if (!placeCheck(x, y, ship, layout)) {
        return board;
      }
      if (layout === "horizontal") {
        if (y + ship.length > 10) {
          return;
        }
        for (let i = 0; i < ship.length; i++) {
          board[x][y + i] = ship;
        }
        topPrefix(x, y, ship, layout);
        bottomSuffix(x, y, ship, layout);
        leftPrefix(x, y, ship, layout);
        rightSuffix(x, y, ship, layout);
        return;
      }
      if (x + ship.length > 10) {
        return;
      }
      for (let i = 0; i < ship.length; i++) {
        board[x + i][y] = ship;
      }
      topPrefix(x, y, ship, layout);
      bottomSuffix(x, y, ship, layout);
      leftPrefix(x, y, ship, layout);
      rightSuffix(x, y, ship, layout);
    },
    recieveAttack(x, y) {
      if (board[x][y] === " " || Number.isInteger(board[x][y])) {
        board[x][y] = "missed";
        return false;
      }
      board[x][y].hit();
    },
    allShipsSunk() {
      let ships = [];
      let sunkCount = 0;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (
            !ships.includes(board[i][j]) &&
            board[i][j] !== " " &&
            !Number.isInteger(board[i][j]) &&
            board[i][j] !== "missed"
          ) {
            ships.push(board[i][j]);
          }
        }
      }
      ships.forEach((ship) => {
        if (ship.isSunk()) {
          sunkCount++;
        }
      });
      if (sunkCount === 4) {
        return true;
      }
      return false;
    },
    isPlaced(ship) {
      let count = 0;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (board[i][j] === ship) {
            count++;
          }
        }
      }
      if (count === ship.length) {
        return true;
      } else if (count > ship.length) {
        return (board = [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ]);
      } else {
        return false;
      }
    },
    allShipsPlaced() {
      let count = 0;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (
            board[i][j] !== " " &&
            !Number.isInteger(board[i][j]) &&
            board[i][j] !== "missed"
          ) {
            count++;
          }
        }
      }
      if (count === 10) {
        return true;
      }
      return false;
    },
    randomPlaceShip() {
      let ship1 = Ship();
      let ship2 = Ship(2);
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      let shipList = [ship1, ship2, ship3, ship4];
      while (!this.allShipsPlaced()) {
        for (let ship of shipList) {
          while (!this.isPlaced(ship)) {
            let x = Math.floor(Math.random(0, 10) * 10);
            let y = Math.floor(Math.random(0, 10) * 10);
            let align = randomAlign();
            this.placeShip(x, y, ship, align);
          }
        }
      }
      return;
    },
  };
};
export { Ship, gameBoard };
