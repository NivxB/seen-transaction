import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import request from "supertest";
import app from "../../src/app";
import { MOCK_TRANSACTION_DATA } from "../constants";

beforeAll(() => {
  // Meant to be DB seeding for integration testing
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MOCK_TRANSACTION_DATA
  });
});

afterAll(() => {
  vi.resetAllMocks();
});

describe("Customer Routes", () => {
  it("should return 404 if customer is not found (invalid customerId)", async () => {
    // Act
    const response = await request(app).get("/v2/customer/123/transactions").expect(404);
    // Assert
    expect(response.body).toStrictEqual({ error: true, code: "not_found" });
  });

  it("should return customer transactions", async () => {
    // Act
    const response = await request(app).get("/v2/customer/1/transactions").expect(200);
    // Arrange
    expect(response.body).toHaveLength(4);
  });

  it("should return related customers", async () => {
    // Act
    const response = await request(app).get("/v2/customer/1/related").expect(200);
    // Arrange
    expect(response.body).toEqual([]);
  });
});
