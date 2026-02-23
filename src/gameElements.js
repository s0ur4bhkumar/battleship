const ship = (length = null, hitCount = 0) =>{
  return {
    length: length,
    hitCount: hitCount,
    hit() {
      this.hitCount++
    },
    isSunk() {
      if (this.hitCount === this.length) {
        return true
      }
      else {
        return false
      }
    }
  }
}

const gameBoard = () => {
  let board = []
  for (let i = 0; i < 10; i++) {
    let row = []
    for (let j = 0; j < 10; j++){
      row.push(j)
    }
    board.push(row)
  }
  return {
    board: board,
    placeShip(x, y, Ship = ship()) {
      if (Ship.length === 1) {
        board[x][y] = Ship
      }
    }
  }
}

export {ship,gameBoard}