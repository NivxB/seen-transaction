import { describe, it, expect } from "vitest";
import * as D from "io-ts/lib/Decoder";
import { decodeType, decodeArrayOfType } from "../../../src/utils/decoder"; // Update with actual path

const StringDecoder = D.string;
const NumberDecoder = D.number;

describe("decodeType", () => {
  it("should decode a valid string", () => {
    expect(decodeType(StringDecoder, "hello")).toBe("hello");
  });

  it("should throw an error for an invalid string", () => {
    expect(() => decodeType(StringDecoder, 123)).toThrowError();
  });

  it("should decode a valid number", () => {
    expect(decodeType(NumberDecoder, 42)).toBe(42);
  });
});

describe("decodeArrayOfType", () => {
  it("should decode an array of valid numbers", () => {
    expect(decodeArrayOfType(NumberDecoder, [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should throw an error if an array contains an invalid value", () => {
    expect(() => decodeArrayOfType(NumberDecoder, [1, "two", 3])).toThrowError();
  });

  it("should throw an error if input is not an array", () => {
    expect(() => decodeArrayOfType(NumberDecoder, "not an array")).toThrowError();
  });
});
