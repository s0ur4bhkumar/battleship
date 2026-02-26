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
    if (layout === "horizontal") {
      if (y + ship.length >= 10) {
        return false;
      }
    }
    if (x + ship.length >= 10) {
      return false;
    }
  }
  return {
    board: board,
    placeShip(x, y, ship = Ship(), layout = "horizontal") {
      
    }
  };
}
const board = gameBoard();
board.placeShip(9, 6, "ship");
console.log(board.board);
export { Ship, gameBoard };
