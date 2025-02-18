import { getSEENTransactions } from "../clients/seen";
import type { RelatedCustomer, Transaction } from "../models";

export const getCustomerTransactions = async (customerId: number): Promise<Transaction[]> => {
  const transactions = await getSEENTransactions();

  const customerTransactions = transactions
    .filter((transaction) => transaction.customerId === customerId)
    .sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());

  // Root Transaction Id , Transaction
  const relatedTransactions: Map<number, Transaction> = new Map();

  // Related Transaction, Root Transaction
  const relatedMapIds: Map<number, number> = new Map();

  for (const transaction of customerTransactions) {
    const parentTransactionId = relatedMapIds.get(transaction.transactionId);
    const relatedTransactionId = transaction.metadata?.relatedTransactionId;

    if (parentTransactionId && relatedTransactions.has(parentTransactionId)) {
      relatedTransactions.get(parentTransactionId)!.createdAt = transaction.transactionDate;
      relatedTransactions.get(parentTransactionId)!.transactionId = transaction.transactionId;

      relatedTransactions.get(parentTransactionId)?.timeline.unshift({
        createdAt: transaction.transactionDate,
        status: transaction.transactionStatus,
        amount: transaction.amount
      });
      if (relatedTransactionId) {
        relatedMapIds.set(relatedTransactionId, parentTransactionId);
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
      metadata: {},
      timeline: [
        {
          createdAt: transaction.transactionDate,
          status: transaction.transactionStatus,
          amount: transaction.amount
        }
      ]
    };

    relatedTransactions.set(transaction.transactionId, newTransaction);

    if (relatedTransactionId) {
      relatedMapIds.set(relatedTransactionId, transaction.transactionId);
    }
  }

  return Array.from(relatedTransactions.values()).reverse();
};

export const getRelatedCustomers = async (customerId: number): Promise<RelatedCustomer[]> => {
  const transactions = await getSEENTransactions();

  const { customerTransactions, relatedTransactions } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.customerId === customerId) {
        acc.customerTransactions.add(transaction.transactionId);
        if (transaction.metadata?.relatedTransactionId) {
          acc.relatedTransactions.add(transaction.metadata.relatedTransactionId);
        }
      }
      return acc;
    },
    { customerTransactions: new Set<number>(), relatedTransactions: new Set<number>() }
  );

  return transactions
    .filter(
      (transaction) =>
        relatedTransactions.has(transaction.transactionId) &&
        !customerTransactions.has(transaction.transactionId)
    )
    .map((transaction) => ({
      relatedCustomerId: transaction.customerId,
      relationType: transaction.transactionType
    }));
};
