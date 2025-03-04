import * as D from "io-ts/lib/Decoder";

export const SEENTransactionType = D.literal(
  "ACH_INCOMING",
  "ACH_OUTGOING",
  "FEE",
  "P2P_RECEIVE",
  "P2P_SEND",
  "POS",
  "WIRE_INCOMING",
  "WIRE_OUTGOING",
  "DEVICE"
);

export type SEENTransactionType = D.TypeOf<typeof SEENTransactionType>;

export const SEENTransactionStatus = D.literal("PENDING", "SETTLED", "RETURNED");

export type SEENTransactionStatus = D.TypeOf<typeof SEENTransactionStatus>;

export const SEENTransactionMetadata = D.partial({
  relatedTransactionId: D.number,
  deviceId: D.string
});

export type SEENTransactionMetadata = D.TypeOf<typeof SEENTransactionMetadata>;

export const SEENTransaction = D.struct({
  amount: D.number,
  authorizationCode: D.string,
  customerId: D.number,
  description: D.string,
  metadata: SEENTransactionMetadata,
  transactionDate: D.string,
  transactionId: D.number,
  transactionStatus: SEENTransactionStatus,
  transactionType: SEENTransactionType
});

export type SEENTransaction = D.TypeOf<typeof SEENTransaction>;
