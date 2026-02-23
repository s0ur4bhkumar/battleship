import { ship } from "./gameElements.js";
import { gameBoard } from "./gameElements.js";

test("test for ship isSunk", () => {
  const mock = ship(1);
  mock.hit();
  expect(mock.isSunk()).toBe(true);
});

test("test for ship hitCount", () => {
  const mock = ship();
  mock.hit();
  mock.hit();
  expect(mock.hitCount).toBe(2);
});

test("test for if ship is not sunk", () => {
  const mock = ship(2);
  mock.hit();
  expect(mock.isSunk()).toBe(false);
});
