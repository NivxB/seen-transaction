import * as D from "io-ts/lib/Decoder";
import { SEENTransactionType } from "./seen";

export const RelatedCustomer = D.struct({
  relatedCustomerId: D.number,
  relationType: SEENTransactionType
});

export type RelatedCustomer = D.TypeOf<typeof RelatedCustomer>;
