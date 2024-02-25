import { sum } from "../sum";

test("'Sum' function should calculate and return the sum of 2 numbers", () => {
    const result = sum(4, 7);

    // Assertion
    expect(result).toBe(11);
});