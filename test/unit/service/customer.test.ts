import { describe, it, expect, vi, Mock, beforeEach, afterEach } from "vitest";
import { getCustomerTransactions, getRelatedCustomers } from "../../../src/services/customer";
import { getSEENTransactions } from "../../../src/clients/seen";
import { MOCK_TRANSACTION_DATA } from "../../constants";

vi.mock("../../../src/clients/seen", () => ({
  getSEENTransactions: vi.fn()
}));

const mockGetSEENTransactions = getSEENTransactions as Mock;

beforeEach(() => {
  mockGetSEENTransactions.mockResolvedValue(MOCK_TRANSACTION_DATA);
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("getCustomerTransactions", () => {
  it("should return sorted transactions for a customer", async () => {
    // Arrange
    mockGetSEENTransactions.mockResolvedValue([
      {
        transactionId: 1,
        authorizationCode: "F10000",
        transactionDate: "2022-09-01T11:46:42+00:00",
        customerId: 1,
        transactionType: "ACH_INCOMING",
        transactionStatus: "PENDING",
        description: "Deposit from Citibank",
        amount: 5000,
        metadata: {}
      },
      {
        transactionId: 2,
        authorizationCode: "F10000",
        transactionDate: "2022-09-03T15:41:42+00:00",
        customerId: 1,
        transactionType: "ACH_INCOMING",
        transactionStatus: "SETTLED",
        description: "Deposit from Citibank",
        amount: 5000,
        metadata: {
          relatedTransactionId: 1
        }
      }
    ]);
    // Act
    const transactions = await getCustomerTransactions(1);
    // Assert
    expect(transactions).toHaveLength(1);
    expect(transactions[0].transactionId).toBe(1); // First transactionId
    expect(transactions[0].timeline).toStrictEqual([
      {
        createdAt: "2022-09-01T11:46:42+00:00",
        status: "PENDING",
        amount: 5000
      },
      {
        createdAt: "2022-09-03T15:41:42+00:00",
        status: "SETTLED",
        amount: 5000
      }
    ]);
  });

  it("should return sorted transactions for a customer with multiple timeline", async () => {
    // Act
    const transactions = await getCustomerTransactions(1);
    // Assert;
    const lastTransaction = transactions.pop();
    expect(lastTransaction?.transactionId).toBe(3); // First transactionId
    expect(lastTransaction?.timeline).toStrictEqual([
      {
        createdAt: "2022-09-05T11:36:42+00:00",
        status: "PENDING",
        amount: -143.21
      },
      {
        createdAt: "2022-09-06T15:41:42+00:00",
        status: "SETTLED",
        amount: -143.21
      },
      {
        createdAt: "2022-09-10T15:41:42+00:00",
        status: "RETURNED",
        amount: 143.21
      }
    ]);
  });

  it("should return empty for a non existing customer", async () => {
    // Act
    const transactions = await getCustomerTransactions(-1);
    // Assert
    expect(transactions).toHaveLength(0);
  });

  it("should handle empty transaction response", async () => {
    // Arrange
    mockGetSEENTransactions.mockResolvedValue([]);
    // Act
    const transactions = await getCustomerTransactions(1);
    // Assert
    expect(transactions).toHaveLength(0);
  });

  it("should handle empty transaction response", async () => {
    // Arrange
    mockGetSEENTransactions.mockResolvedValue([]);
    // Act
    const transactions = await getCustomerTransactions(1);
    // Assert
    expect(transactions).toHaveLength(0);
  });

  it("should handle single transaction with single timeline", async () => {
    // Arrange
    mockGetSEENTransactions.mockResolvedValue([
      {
        transactionId: 1,
        authorizationCode: "F10000",
        transactionDate: "2022-09-03T15:41:42+00:00",
        customerId: 1,
        transactionType: "ACH_INCOMING",
        transactionStatus: "SETTLED",
        description: "Deposit from Citibank",
        amount: 5000,
        metadata: {}
      }
    ]);
    // Act
    const transactions = await getCustomerTransactions(1);
    // Assert
    expect(transactions).toHaveLength(1);
    expect(transactions[0].transactionId).toBe(1);
    expect(transactions[0].timeline).toStrictEqual([
      {
        createdAt: "2022-09-03T15:41:42+00:00",
        status: "SETTLED",
        amount: 5000
      }
    ]);
  });
});

describe("getRelatedCustomers", () => {
  it("should return related customers for a given customer", async () => {
    // Act
    const relatedCustomers = await getRelatedCustomers(5);
    // Assert
    expect(relatedCustomers).toHaveLength(6);
    expect(relatedCustomers[0].relatedCustomerId).toBe(4);
    expect(relatedCustomers[0].relationType).toBe("P2P_SEND");

    // Related customer should have the opposite transaction
    const relatedRelatedCustomers = await getRelatedCustomers(4);
    // Assert
    expect(relatedRelatedCustomers).toHaveLength(6);
    expect(relatedRelatedCustomers[1].relatedCustomerId).toBe(5);
    expect(relatedRelatedCustomers[1].relationType).toBe("P2P_RECEIVE");
  });

  it("should handle empty transaction response", async () => {
    // Arrange
    mockGetSEENTransactions.mockResolvedValue([]);
    // Act
    const relatedCustomers = await getRelatedCustomers(1);
    // Assert
    expect(relatedCustomers).toHaveLength(0);
  });

  it("should handle non existing customer", async () => {
    // Act
    const relatedCustomers = await getRelatedCustomers(-1);
    // Assert
    expect(relatedCustomers).toHaveLength(0);
  });
});
