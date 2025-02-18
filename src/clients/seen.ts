import { decodeArrayOfType } from "../utils";
import { SEENTransaction } from "../models";

const URL = process.env.SEEN_TRANSACTION_DATA_URL;
if (!URL) {
  throw Error("Missing SEEN_TRANSACTION_DATA_URL");
}

let transactions: SEENTransaction[] | null = null;

/**
 * Fetches SEEN transactions, caching the results for future calls.
 *
 * @returns {Promise<SEENTransaction[]>} A promise that resolves to an array of SEEN transactions.
 */
export const getSEENTransactions = async (): Promise<SEENTransaction[]> => {
  if (transactions) {
    return transactions;
  }

  const response = await fetch(URL);
  const data = await response.json();
  transactions = decodeArrayOfType(SEENTransaction, data);
  return transactions;
};

/**
 * Checks if a given customer ID is present in the SEEN transactions.
 *
 * @param {string | number} [customerId] - The customer ID to check.
 * @returns {Promise<boolean>} A promise that resolves to true if the customer exists, otherwise false.
 */
export const isSEENCustomer = async (customerId?: string | number): Promise<boolean> => {
  if (!customerId) {
    return false;
  }
  const transactions = await getSEENTransactions();
  return (
    transactions.find((transaction) => transaction.customerId === Number(customerId)) !== undefined
  );
};
