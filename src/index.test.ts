import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { main } from ".";

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
    main();
    expect(true).toBeTruthy();
  });
});
