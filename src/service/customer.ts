import { getSEENTransactions } from "../clients/seen";
import type { Transaction } from "../models";

export const getCustomerTransactions = async (customerId: number): Promise<Transaction[]> => {
  const transactions = await getSEENTransactions();

  const customerTransactions = transactions
    .filter((transaction) => transaction.customerId === customerId)
    .sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());

  // Root Transaction Id , Transaction
  const relatedTransactions: Map<number, Transaction> = new Map();

  // Related Transaction, Root Transaction
  const relatedMapIds: Record<number, number> = {};

  for (const transaction of customerTransactions) {
    const parentTransactionId = relatedMapIds[transaction.transactionId];

    if (parentTransactionId && relatedTransactions.has(parentTransactionId)) {
      // TODO: fix dates
      relatedTransactions.get(parentTransactionId)?.timeline.unshift({
        createdAt: transaction.transactionDate,
        status: transaction.transactionStatus,
        amount: transaction.amount
      });
      if (transaction.metadata?.relatedTransactionId) {
        relatedMapIds[transaction.metadata.relatedTransactionId] = parentTransactionId;
      }
      continue;
    }

    const newTransaction: Transaction = {
      createdAt: transaction.transactionDate,
      updatedAt: transaction.transactionDate,
      transactionId: transaction.transactionId,
      authorizationCode: transaction.authorizationCode,
      status: transaction.transactionStatus,
      description: transaction.description,
      transactionType: transaction.transactionType,
      metadata: transaction.metadata ?? {},
      timeline: [
        {
          createdAt: transaction.transactionDate,
          status: transaction.transactionStatus,
          amount: transaction.amount
        }
      ]
    };

    relatedTransactions.set(transaction.transactionId, newTransaction);

    if (transaction.metadata?.relatedTransactionId) {
      relatedMapIds[transaction.metadata.relatedTransactionId] = transaction.transactionId;
    }
  }

  return Array.from(relatedTransactions.values());
};

export const getRelatedCustomers = async (_customerId: string) => [];
