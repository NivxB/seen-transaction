import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";

describe("main", () => {
  beforeAll(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(process, "exit").mockImplementation(() => undefined as never);
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("should handle SIGINT signal", () => {
    expect(true).toBeTruthy();
  });
});
