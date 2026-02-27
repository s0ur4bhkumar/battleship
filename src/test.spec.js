import { Ship } from "./gameElements.js";
import { gameBoard } from "./gameElements.js";

describe("ship()", () => {
  test("test for ship isSunk", () => {
    const mock = Ship(1);
    mock.hit();
    expect(mock.isSunk()).toBe(true);
  });

  test("test for ship hitCount", () => {
    const mock = Ship();
    mock.hit();
    mock.hit();
    expect(mock.hitCount).toBe(2);
  });

  test("test for if ship is not sunk", () => {
    const mock = Ship(2);
    mock.hit();
    expect(mock.isSunk()).toBe(false);
  });

  test("test for ship's length", () => {
    const mock = Ship(6);
    expect(mock.length).toBe(null);
  });

  test("test for ship's length", () => {
    const mock = Ship();
    expect(mock.length).toBe(1);
  });

  test("test for ship's length", () => {
    const mock = Ship(2);
    expect(mock.length).toBe(2);
  });
});

let board;
beforeEach(() => {
  board = gameBoard();
});
afterEach(() => {
  board = null;
});
describe("gameboard methods", () => {
  it("board", () => {
    const board = gameBoard();
    expect(board.board).toEqual([
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
  });
});
