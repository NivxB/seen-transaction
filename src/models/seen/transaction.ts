import * as D from "io-ts/lib/Decoder";

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
  transactionStatus: D.string, // enum
  transactionType: D.string // enum
});

export type SEENTransaction = D.TypeOf<typeof SEENTransaction>;
