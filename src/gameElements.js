const Ship = (length = 1, hitCount = 0) => {
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
  function isTopRow(x, y) {
    return x === 0;
  }
  function isBottomRow(x, y) {
    return x === 9;
  }
  function isLeftMostColoumn(x, y) {
    return y === 0;
  }
  function isRightMostColumn(x, y, length) {
    // if (length !== 1) {
    //   return length + y <= 10 || length + x <= 10;
    // }
    return y === 9;
  }
  function placeCheck(x, y, ship, layout) {
    let j = 0;
    if (layout === "horizontal") {
      while (j < ship.length && x + j < 10 && y + j < 10) {
        if (!Number.isInteger(board[x][y + j])) {
          return false;
        }
      }
      j++;
    }
    if (layout === "vertical") {
      if (!Number.isInteger(board[x + j][y])) {
        return false;
      }
    }
  }
  return {
    board: board,
    placeShip(x, y, ship = Ship(), layout = "horizontal") {
      if (Number.isInteger(board[x][y])) {
        if (isTopRow(x, y) && isLeftMostColoumn(x, y)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x + 1][y + i] = " ";
                i++;
              }
              board[x][y + i] = " ";
              board[x + 1][y + i] = " ";
              return;
            }
            while (i < ship.length) {
              board[x + i][y] = ship;
              board[x + i][y + 1] = " ";
              i++;
            }
            board[x + i][y + 1] = " ";
            board[x + i][y] = " ";
            return;
          }
          board[x][y] = ship; // [0][0]
          board[x + 1][y] = " "; //[1,0]
          board[x][y + 1] = " "; //[0][1]
          board[x + 1][y + 1] = " "; //[1][1]
        } else if (isTopRow(x, y) && isRightMostColumn(x, y, ship.length)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              y = 10 - ship.length;
              board[x][y - 1] = " ";
              board[x + 1][y - 1] = " ";
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x + 1][y + i] = " ";
                i++;
              }
              return;
            }
            x = 0;
            while (i < ship.length) {
              board[x + i][y - 1] = " ";
              board[x + i][y] = ship;
              i++;
            }
            board[x + i][y - 1] = " ";
            board[x + i][y] = " ";
            return;
          }
          board[x][y] = ship; //[0][9]
          board[x][y - 1] = " "; //[0][8]
          board[x + 1][y] = " "; //[1][9]
          board[x + 1][y - 1] = " "; //[1][8]
        } else if (isBottomRow(x, y) && isLeftMostColoumn(x, y)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x - 1][y + i] = " ";
                i++;
              }
              board[x][y + i] = " ";
              board[x - 1][y + i] = " ";
              return;
            }
            while (i < ship.length) {
              board[x - i][y] = ship;
              board[x - i][y + 1] = " ";
              i++;
            }
            board[x - i][y] = " ";
            board[x - i][y + 1] = " ";
            return;
          }
          board[x][y] = ship; //[9][0]
          board[x - 1][y] = " "; //[8][0]
          board[x][y + 1] = " "; //[9][1]
          board[x - 1][y + 1] = " "; //[8][1]
        } else if (isBottomRow(x, y) && isRightMostColumn(x, y, ship.length)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              y = 10 - ship.length;
              board[x - 1][y - 1] = " ";
              board[x][y - 1] = " ";
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x - 1][y + i] = " ";
                i++;
              }
              return;
            }
            while (i < ship.length) {
              board[x - i][y] = ship;
              board[x - i][y - 1] = " ";
              i++;
            }
            board[x - i][y] = " ";
            board[x - i][y - 1] = " ";
            return;
          }
          board[x][y] = ship; //[9][9]
          board[x - 1][y] = " "; //[8][9]
          board[x][y - 1] = " "; //[9][8]
          board[x - 1][y - 1] = " "; //for [8][8]
        } else if (isTopRow(x, y)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              board[x][y - 1] = " ";
              board[x + 1][y - 1] = " ";
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x + 1][y + i] = " ";
                i++;
              }
              board[x][y + i] = " ";
              board[x + 1][y + i] = " ";
              return;
            }
            while (i < ship.length) {
              board[x + i][y - 1] = " ";
              board[x + i][y] = ship;
              board[x + i][y + 1] = " ";
              i++;
            }
            board[x + i][y - 1] = " ";
            board[x + i][y] = " ";
            board[x + i][y + 1] = " ";
            return;
          }
          board[x][y] = ship; // taking [0][4] as an example
          board[x][y - 1] = " "; // [0][3]
          board[x][y + 1] = " "; // [0][5]
          board[x + 1][y] = " "; // [1][4]
          board[x + 1][y - 1] = " "; // [1][3]
          board[x + 1][y + 1] = " "; // [1][5]
        } else if (isBottomRow(x, y)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              board[x - 1][y - 1] = " ";
              board[x][y - 1] = " ";
              while (i < ship.length) {
                board[x][y + i] = ship;
                board[x - 1][y + i] = " ";
                i++;
              }
              board[x - 1][y + i] = " ";
              board[x][y + i] = " ";
              return;
            }
            while (i < ship.length) {
              board[x - i][y - 1] = " ";
              board[x - i][y] = ship;
              board[x - i][y + 1] = " ";
              i++;
            }
            board[x - i][y - 1] = " ";
            board[x - i][y] = " ";
            board[x - i][y + 1] = " ";
            return;
          }
          board[x][y] = ship; //taking [9][4] as an example
          board[x][y - 1] = " "; //[9][3]
          board[x][y + 1] = " "; //[9][5]
          board[x - 1][y] = " "; //[8][4]
          board[x - 1][y - 1] = " "; //[8][3]
          board[x - 1][y + 1] = " "; // [8][5]
        } else if (isLeftMostColoumn(x, y)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              while (i < ship.length) {
                board[x - 1][y + i] = " ";
                board[x][y + i] = ship;
                board[x + 1][y + i] = " ";
                i++;
              }
              board[x - 1][y + i] = " ";
              board[x][y + i] = " ";
              board[x + 1][y + i] = " ";
              return;
            }
            board[x - 1][y] = " ";
            board[x - 1][y + 1] = " ";
            while (i < ship.length) {
              board[x + i][y] = ship;
              board[x + i][y + 1] = " ";
              i++;
            }
            board[x + i][y] = " ";
            board[x + i][y + 1] = " ";
            return;
          }
          board[x][y] = ship; //[4][0]
          board[x - 1][y] = " "; //[3][0]
          board[x + 1][y] = " "; // [5][0]
          board[x - 1][y + 1] = " "; //[3][1]
          board[x][y + 1] = " "; //[4][1]
          board[x + 1][y + 1] = " "; //[5][1]
        } else if (isRightMostColumn(x, y, ship.length)) {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              while (i < ship.length) {
                board[x - 1][y - i] = " ";
                board[x][y - i] = ship;
                board[x + 1][y - i] = " ";
                i++;
              }
              board[x - 1][y - i] = " ";
              board[x][y - i] = " ";
              board[x + 1][y - i] = " ";
              return;
            }
            board[x - 1][y] = " ";
            board[x - 1][y - 1] = " ";
            while (i < ship.length) {
              board[x + i][y] = ship;
              board[x + i][y - 1] = " ";
              i++;
            }
            board[x + i][y] = " ";
            board[x + i][y - 1] = " ";
            return;
          }
          board[x][y] = ship; //[4][9]
          board[x - 1][y] = " "; //[3][9]
          board[x + 1][y] = " "; //[5][9]
          board[x - 1][y - 1] = " "; // [3][8]
          board[x][y - 1] = " "; // [4][8]
          board[x + 1][y - 1] = " "; // [5][8]
        } else {
          if (ship.length > 1) {
            let i = 0;
            if (layout === "horizontal") {
              board[x - 1][y - 1] = " ";
              board[x][y - 1] = " ";
              board[x + 1][y - 1] = " ";
              while (i < ship.length) {
                board[x - 1][y + i] = " ";
                board[x][y + i] = ship;
                board[x + 1][y + i] = " ";
                i++;
              }
              board[x - 1][y + i] = " ";
              board[x][y + i] = " ";
              board[x + 1][y + i] = " ";
              return;
            }
            board[x - 1][y - 1] = " ";
            board[x - 1][y] = " ";
            board[x - 1][y + 1] = " ";
            while (i < ship.length) {
              board[x + i][y - 1] = " ";
              board[x + i][y] = ship;
              board[x + i][y + 1] = " ";
              i++;
            }
            board[x + i][y - 1] = " ";
            board[x + i][y] = " ";
            board[x + i][y + 1] = " ";
            return;
          }
          board[x][y] = ship; //[5][5]
          board[x - 1][y - 1] = " "; //[4][4]
          board[x - 1][y] = " "; //[4][5]
          board[x - 1][y + 1] = " "; //[4][6]
          board[x][y - 1] = " "; //[5][4]
          board[x][y + 1] = " "; //[5][6]
          board[x + 1][y - 1] = " "; //[6][4]
          board[x + 1][y] = " "; //[6][5]
          board[x + 1][y + 1] = " "; //[6][6]
        }
      }
    },
  };
};
const board = gameBoard();
board.placeShip(4, 4, "hell");
console.log(board.board);
export { Ship, gameBoard };
