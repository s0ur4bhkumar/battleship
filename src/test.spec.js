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
  describe("place method for ship with length 1", () => {
    it("is placed on top row and leftmost column", () => {
      board.placeSingle(0, 0, "hello");
      expect(board.board).toEqual([
        ["hello", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
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
    it("is place on top row and rightmost column", () => {
      board.placeSingle(0, 9, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hello"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
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
    it("is placed on bottom row and leftmost column", () => {
      board.placeSingle(9, 0, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hello", " ", 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and rightmost", () => {
      board.placeSingle(9, 9, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hello"],
      ]);
    });
    it("is placed on top row", () => {
      board.placeSingle(0, 4, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, " ", "hello", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
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
    it("is placed on bottom row", () => {
      board.placeSingle(9, 4, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hello", " ", 6, 7, 8, 9],
      ]);
    });
    it("is placed on leftmost column", () => {
      board.placeSingle(4, 0, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hello", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on rightmost column", () => {
      board.placeSingle(4, 9, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hello"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed generally for ship with size 1", () => {
      board.placeSingle(5, 5, "hello");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, " ", " ", " ", 7, 8, 9],
        [0, 1, 2, 3, " ", "hello", " ", 7, 8, 9],
        [0, 1, 2, 3, " ", " ", " ", 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
  });
  describe("horizontal placements", () => {
    it("places single element", () => {
      board.placeHorizontally(5, 5, "h");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, " ", " ", " ", 7, 8, 9],
        [0, 1, 2, 3, " ", "h", " ", 7, 8, 9],
        [0, 1, 2, 3, " ", " ", " ", 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
  });
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
