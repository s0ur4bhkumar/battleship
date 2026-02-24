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
  function isRightMostColumn(x, y) {
    return y === 9;
  }
  return {
    board: board,
    placeSingle(x, y, ship = Ship()) {
      //function to place ships with length 1 or unspecified length
      if (Number.isInteger(board[x][y])) {
        if (isTopRow(x, y) && isLeftMostColoumn(x, y)) {
          board[x][y] = ship; // [0][0]
          board[x + 1][y] = " "; //[1,0]
          board[x][y + 1] = " "; //[0][1]
          board[x + 1][y + 1] = " "; //[1][1]
        } else if (isTopRow(x, y) && isRightMostColumn(x, y)) {
          console.log("top and rightmost");
          board[x][y] = ship; //[0][9]
          board[x][y - 1] = " "; //[0][8]
          board[x + 1][y] = " "; //[1][9]
          board[x + 1][y - 1] = " "; //[1][8]
        } else if (isBottomRow(x, y) && isLeftMostColoumn(x, y)) {
          board[x][y] = ship; //[9][0]
          board[x - 1][y] = " "; //[8][0]
          board[x][y + 1] = " "; //[9][1]
          board[x - 1][y + 1] = " ";//[8][1]
        } else if (isBottomRow(x, y) && isRightMostColumn(x, y)) {
          board[x][y] = ship; //[9][9]
          board[x - 1][y] = " "; //[8][9]
          board[x][y - 1] = " "; //[9][8]
          board[x - 1][y - 1] = " ";//for [8][8]
        } else if (isTopRow(x, y)) {
          board[x][y] = ship; // taking [0][4] as an example
          board[x][y - 1] = " "; // [0][3]
          board[x][y + 1] = " "; // [0][5]
          board[x + 1][y] = " "; // [1][4]
          board[x + 1][y - 1] = " "; // [1][3]
          board[x + 1][y + 1] = " "; // [1][5]
        } else if (isBottomRow(x, y)) {
          board[x][y] = ship; //taking [9][4] as an example
          board[x][y - 1] = " "; //[9][3]
          board[x][y + 1] = " "; //[9][5]
          board[x - 1][y] = " "; //[8][4]
          board[x - 1][y - 1] = " "; //[8][3]
          board[x - 1][y + 1] = " "; // [8][5]
        } else if (isLeftMostColoumn(x, y)) {
          board[x][y] = ship; //[4][0]
          board[x - 1][y] = " "; //[3][0]
          board[x + 1][y] = " "; // [5][0]
          board[x - 1][y + 1] = " "; //[3][1]
          board[x][y + 1] = " "; //[4][1]
          board[x + 1][y + 1] = " "; //[5][1]
        } else if (isRightMostColumn(x, y)) {
          board[x][y] = ship; //[4][9]
          board[x - 1][y] = " "; //[3][9]
          board[x + 1][y] = " "; //[5][9]
          board[x - 1][y - 1] = " "; // [3][8]
          board[x][y - 1] = " "; // [4][8]
          board[x + 1][y - 1] = " "; // [5][8]
        } else {
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
    placeHorizontally(x, y, ship = 'ship') {
      if (ship.length === 1) {
        this.placeSingle(x,y,ship)
      }
      else {
        
      }
    }
  };
};
export { Ship, gameBoard };
