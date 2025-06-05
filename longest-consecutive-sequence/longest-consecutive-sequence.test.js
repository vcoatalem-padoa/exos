import { it, expect } from "vitest";
import { longestConsecutiveSequence } from "./longest-consecutive-sequence";

it.each([
  {
    array: [1, 2, 3],
    expected: 3,
  },
  {
    array: [2, 4, 1],
    expected: 2,
  },
  //TODO: complete test cases
])("returns $expected when array is $array", ({ array, expected }) => {
  expect(longestConsecutiveSequence(array)).toBe(expected);
});
