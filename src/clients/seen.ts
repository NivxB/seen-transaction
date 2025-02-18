import { decodeArrayOfType } from "../utils";
import { SEENTransaction } from "../models";

const URL = "https://cdn.seen.com/challenge/transactions-v2.1.json";

let transactions: SEENTransaction[] | null = null;

export const getSEENTransactions = async (): Promise<SEENTransaction[]> => {
  if (transactions) {
    return transactions;
  }

  const response = await fetch(URL);
  const data = await response.json();
  transactions = decodeArrayOfType(SEENTransaction, data);
  return transactions;
};

export const isSEENCustomer = async (customerId?: string | number): Promise<boolean> => {
  if (!customerId) {
    return false;
  }
  const transactions = await getSEENTransactions();
  return (
    transactions.find((transaction) => transaction.customerId === Number(customerId)) !== undefined
  );
};
