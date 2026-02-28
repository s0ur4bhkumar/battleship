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
let ship;
beforeEach(() => {
  board = gameBoard();
  ship = Ship();
});
afterEach(() => {
  board = null;
  ship = null;
});
describe("gameboard methods", () => {
  describe("place method for ship with length 1", () => {
    it("is placed on top row and leftmost column", () => {
      board.placeShip(0, 0, "h");
      expect(board.board).toEqual([
        ["h", " ", 2, 3, 4, 5, 6, 7, 8, 9],
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
      board.placeShip(0, 9, "h");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "h"],
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
      board.placeShip(9, 0, "h");
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
        ["h", " ", 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and rightmost", () => {
      board.placeShip(9, 9, "h");
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
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "h"],
      ]);
    });
    it("is placed on top row", () => {
      board.placeShip(0, 4, "h");
      expect(board.board).toEqual([
        [0, 1, 2, " ", "h", " ", 6, 7, 8, 9],
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
      board.placeShip(9, 4, "h");
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
        [0, 1, 2, " ", "h", " ", 6, 7, 8, 9],
      ]);
    });
    it("is placed on leftmost column", () => {
      board.placeShip(4, 0, "h");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["h", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on rightmost column", () => {
      board.placeShip(4, 9, "h");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "h"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed generally for ship with size 1", () => {
      board.placeShip(5, 5, "h");
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
  describe("place method for ship with length more than 1 horizontally", () => {
    it("is placed on top row and leftmost column horizontally", () => {
      board.placeShip(0, 0, "hell");
      expect(board.board).toEqual([
        ["hell", "hell", "hell", "hell", " ", 5, 6, 7, 8, 9],
        [" ", " ", " ", " ", " ", 5, 6, 7, 8, 9],
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
    it("is placed on top row and rightmost column horizontally", () => {
      board.placeShip(0, 6, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, " ", "hell", "hell", "hell", "hell"],
        [0, 1, 2, 3, 4, " ", " ", " ", " ", " "],
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
    it("is placed on bottom row and leftmost column horizontally", () => {
      board.placeShip(9, 0, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", " ", " ", " ", 5, 6, 7, 8, 9],
        ["hell", "hell", "hell", "hell", " ", 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and rightmost column horizontally", () => {
      board.placeShip(9, 6, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, " ", " ", " ", " ", " "],
        [0, 1, 2, 3, 4, " ", "hell", "hell", "hell", "hell"],
      ]);
    });
    it("is placed on the top row horizontally", () => {
      board.placeShip(0, 4, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, " ", "hell", "hell", "hell", "hell", " ", 9],
        [0, 1, 2, " ", " ", " ", " ", " ", " ", 9],
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
    it("is placed on bottom row horizontally", () => {
      board.placeShip(9, 4, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", " ", " ", " ", 9],
        [0, 1, 2, " ", "hell", "hell", "hell", "hell", " ", 9],
      ]);
    });
    it("is placed on leftmost column horizontally", () => {
      board.placeShip(4, 0, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", " ", " ", " ", 5, 6, 7, 8, 9],
        ["hell", "hell", "hell", "hell", " ", 5, 6, 7, 8, 9],
        [" ", " ", " ", " ", " ", 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on rightmost column horizontally", () => {
      board.placeShip(4, 6, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, " ", " ", " ", " ", " "],
        [0, 1, 2, 3, 4, " ", "hell", "hell", "hell", "hell"],
        [0, 1, 2, 3, 4, " ", " ", " ", " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed generally horizontally", () => {
      board.placeShip(4, 4, "hell");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", " ", " ", " ", 9],
        [0, 1, 2, " ", "hell", "hell", "hell", "hell", " ", 9],
        [0, 1, 2, " ", " ", " ", " ", " ", " ", 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
  });
  describe("place method for ship with length more than 1 vertically", () => {
    it("is placed on top row and leftmost column vertically", () => {
      board.placeShip(0, 0, "hell", "vertical");
      expect(board.board).toEqual([
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on top row and rightmost column vertically", () => {
      board.placeShip(0, 9, "hell", "vertical");
      console.log("board in test", board.board);
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and leftmost column vertically", () => {
      board.placeShip(6, 0, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row and rightmost column vertically", () => {
      board.placeShip(6, 9, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
      ]);
    });
    it("is placed on top row vertically", () => {
      board.placeShip(0, 4, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on bottom row vertically", () => {
      board.placeShip(6, 4, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
      ]);
    });
    it("is placed on leftmost row vertically", () => {
      board.placeShip(4, 0, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        ["hell", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [" ", " ", 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed on rightmost row vertically", () => {
      board.placeShip(4, 9, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", "hell"],
        [0, 1, 2, 3, 4, 5, 6, 7, " ", " "],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
    it("is placed generally vertically", () => {
      board.placeShip(4, 4, "hell", "vertical");
      expect(board.board).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", "hell", " ", 6, 7, 8, 9],
        [0, 1, 2, " ", " ", " ", 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ]);
    });
  });
  describe("recieveAttack method", () => {
    it("is hit", () => {
      board.placeShip(0, 0, ship);
      board.recieveAttack(0, 0);
      expect(ship.hitCount).toBe(1);
    });
    it("is miss", () => {
      board.placeShip(0, 0, ship);
      board.recieveAttack(1, 0);
      expect(board.board[1][0]).toBe("missed");
    });
    it("is sunk", () => {
      const newShip = Ship(4);
      board.placeShip(0, 4, newShip, "vertical");
      board.recieveAttack(0, 4);
      board.recieveAttack(1, 4);
      board.recieveAttack(2, 4);
      board.recieveAttack(3, 4);
      expect(newShip.isSunk()).toBe(true);
    });
  });
  describe("all ships sunk", () => {
    it("all ships are not sunk", () => {
      let ship1 = Ship();
      let ship2 = Ship(2);
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      board.placeShip(0, 0, ship1);
      board.placeShip(9, 0, ship4);
      board.placeShip(4, 4, ship3, "vertical");
      board.placeShip(0, 9, ship2, "vertical");
      board.recieveAttack(9, 0);
      board.recieveAttack(9, 1);
      board.recieveAttack(9, 2);
      board.recieveAttack(9, 3);
      expect(board.allShipsSunk()).toEqual(false);
    });
    it("all ships are sunk", () => {
      let ship1 = Ship();
      let ship2 = Ship(2);
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      board.placeShip(0, 0, ship1);
      board.placeShip(9, 0, ship4);
      board.placeShip(4, 4, ship3, "vertical");
      board.placeShip(0, 9, ship2, "vertical");
      board.recieveAttack(9, 0);
      board.recieveAttack(9, 1);
      board.recieveAttack(9, 2);
      board.recieveAttack(9, 3);
      board.recieveAttack(0, 0);
      board.recieveAttack(4, 4);
      board.recieveAttack(5, 4);
      board.recieveAttack(6, 4);
      board.recieveAttack(0, 9);
      board.recieveAttack(1, 9);
      expect(board.allShipsSunk()).toEqual(true);
    });
  });
  describe("all ships are placed", () => {
    it("all ships are placed", () => {
      let ship1 = Ship();
      let ship2 = Ship(2);
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      board.placeShip(0, 0, ship1);
      board.placeShip(9, 0, ship4);
      board.placeShip(4, 4, ship3, "vertical");
      board.placeShip(0, 9, ship2, "vertical");
      expect(board.allShipsPlaced()).toBe(true);
    });

    it("all ships are not placed", () => {
      let ship1 = Ship();
      let ship2 = Ship(2);
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      board.placeShip(9, 0, ship4);
      board.placeShip(4, 4, ship3, "vertical");
      board.placeShip(0, 9, ship2, "vertical");
      expect(board.allShipsPlaced()).toBe(false);
    });
  });
  describe("isPlaced function", () => {
    it("ship1 is placed", () => {
      let ship1 = Ship();
      board.placeShip(0, 0, ship1);
      expect(board.isPlaced(ship1)).toBe(true);
    });
    it("ship2 is placed", () => {
      let ship2 = Ship(2);
      board.placeShip(5, 5, ship2, "vertical");
      expect(board.isPlaced(ship2)).toBe(true);
    });
    it("ship3 is not placed", () => {
      let ship3 = Ship(3);
      let ship4 = Ship(4);
      board.placeShip(4, 4, ship4, "vertical");
      board.placeShip(4, 4, ship3);
      expect(board.isPlaced(ship3)).toBe(false);
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
