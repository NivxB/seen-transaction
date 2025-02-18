import * as D from "io-ts/lib/Decoder";
import { SEENTransactionStatus, SEENTransactionType } from "./seen";

export const TransactionMetadata = D.partial({
  relatedTransactionId: D.number,
  deviceId: D.string
});

export type TransactionMetadata = D.TypeOf<typeof TransactionMetadata>;

export const TransactionTimelineItem = D.struct({
  createdAt: D.string,
  status: D.string,
  amount: D.number
});

export type TransactionTimelineItem = D.TypeOf<typeof TransactionTimelineItem>;

export const Transaction = D.struct({
  createdAt: D.string,
  updatedAt: D.string,
  transactionId: D.number,
  authorizationCode: D.string,
  status: SEENTransactionStatus,
  description: D.string,
  transactionType: SEENTransactionType,
  metadata: TransactionMetadata,
  timeline: D.array(TransactionTimelineItem)
});

export type Transaction = D.TypeOf<typeof Transaction>;
