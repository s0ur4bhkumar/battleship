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

describe("gameboard methods", () => {
  describe("place horizontally method for ship", () => {
    let board;
    beforeEach(() => {
      board = gameBoard();
    });
    afterEach(() => {
      board = null;
    });
    it("is placed on top row and leftmost column for ship with size 1", () => {
      board.placeSingle(0, 0);
      expect(board.board).toEqual([
        ["ship", " ", 2, 3, 4, 5, 6, 7, 8, 9],
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
    it("is place on top row and rightmost column for ship with size 1", () => {
      board.placeSingle(0, 9);
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "ship"],
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
    it("is placed on bottom row and leftmost column for ship with size 1", () => {
      board.placeSingle(9, 0);
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
        ["ship", " ", 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and rightmost column for ship with size 1", () => {
      board.placeSingle(9, 9);
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
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "ship"],
      ]);
    });
    it("is placed on top row", () => {
      board.placeSingle(0, 4);
      expect(board.board).toEqual([
        [0, 1, 2, " ", "ship", " ", 6, 7, 8, 9],
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
      board.placeSingle(9, 4);
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
        [0, 1, 2, " ", "ship", " ", 6, 7, 8, 9],
      ]);
    });
    it("is placed on leftmost column", () => {
      board.placeSingle(4, 0);
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["ship", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on rightmost column", () => {
      board.placeSingle(4, 9);
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "ship"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed generally for ship with size 1", () => {
      board.placeSingle(5, 5);
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, " ", " ", " ", 7, 8, 9],
        [0, 1, 2, 3, " ", "ship", " ", 7, 8, 9],
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
