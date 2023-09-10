import { describe, test, assert } from "vitest";
import { splitSign } from "../utils/horoscopeUtils"; // Replace 'your-module' with the actual path to your module.
describe("My test", async () => {
  test("splitSign should split the sign and date correctly", () => {
    const signString = "Leo (July 23 - August 22)";
    const result = splitSign(signString);
    assert.deepEqual(result, { sign: "Leo", date: "July 23 - August 22" });
  });

  test("splitSign should handle empty input", () => {
    const result = splitSign();
    assert.deepEqual(result, { sign: "", date: "" });
  });
});
