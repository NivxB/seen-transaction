export const MOCK_TRANSACTION_DATA = [
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
  },
  {
    transactionId: 3,
    authorizationCode: "F10001",
    transactionDate: "2022-09-05T11:36:42+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "PENDING",
    description: "Amazon",
    amount: -143.21,
    metadata: {}
  },
  {
    transactionId: 4,
    authorizationCode: "F10001",
    transactionDate: "2022-09-06T15:41:42+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "SETTLED",
    description: "Amazon",
    amount: -143.21,
    metadata: {
      relatedTransactionId: 3
    }
  },
  {
    transactionId: 5,
    authorizationCode: "F10002",
    transactionDate: "2022-09-07T08:32:00+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "PENDING",
    description: "Walmart",
    amount: -89.5,
    metadata: {}
  },
  {
    transactionId: 6,
    authorizationCode: "F10002",
    transactionDate: "2022-09-08T10:00:30+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "SETTLED",
    description: "Walmart",
    amount: -90.99,
    metadata: {
      relatedTransactionId: 5
    }
  },
  {
    transactionId: 7,
    authorizationCode: "F10003",
    transactionDate: "2022-09-08T10:00:30+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "SETTLED",
    description: "Steam",
    amount: -50.21,
    metadata: {}
  },
  {
    transactionId: 8,
    authorizationCode: "F10001",
    transactionDate: "2022-09-10T15:41:42+00:00",
    customerId: 1,
    transactionType: "POS",
    transactionStatus: "RETURNED",
    description: "Amazon",
    amount: 143.21,
    metadata: {
      relatedTransactionId: 4
    }
  },
  {
    transactionId: 9,
    authorizationCode: "F10004",
    transactionDate: "2022-09-02T00:35:00+00:00",
    customerId: 2,
    transactionType: "ACH_INCOMING",
    transactionStatus: "PENDING",
    description: "Deposit from Chime",
    amount: 3000,
    metadata: {}
  },
  {
    transactionId: 10,
    authorizationCode: "F10004",
    transactionDate: "2022-09-04T06:00:00+00:00",
    customerId: 2,
    transactionType: "ACH_INCOMING",
    transactionStatus: "SETTLED",
    description: "Deposit from Chime",
    amount: 3000,
    metadata: {
      relatedTransactionId: 9
    }
  },
  {
    transactionId: 11,
    authorizationCode: "F10005",
    transactionDate: "2022-09-04T06:30:00+00:00",
    customerId: 2,
    transactionType: "WIRE_OUTGOING",
    transactionStatus: "SETTLED",
    description: "Transfer to Citibank",
    amount: -2995,
    metadata: {
      deviceId: "F111000"
    }
  },
  {
    transactionId: 12,
    authorizationCode: "F20005",
    transactionDate: "2022-09-04T06:30:00+00:00",
    customerId: 2,
    transactionType: "FEE",
    transactionStatus: "SETTLED",
    description: "Fee for Outgoing Wire",
    amount: -5,
    metadata: {
      relatedTransactionId: 11
    }
  },
  {
    transactionId: 13,
    authorizationCode: "F10006",
    transactionDate: "2022-09-06T05:31:32+00:00",
    customerId: 3,
    transactionType: "WIRE_INCOMING",
    transactionStatus: "SETTLED",
    description: "Deposit from Coinbase",
    amount: 10000,
    metadata: {}
  },
  {
    transactionId: 14,
    authorizationCode: "F20006",
    transactionDate: "2022-09-06T05:31:32+00:00",
    customerId: 3,
    transactionType: "FEE",
    transactionStatus: "SETTLED",
    description: "Fee for Incoming Wire",
    amount: 10000,
    metadata: {
      relatedTransactionId: 13
    }
  },
  {
    transactionId: 15,
    authorizationCode: "F10007",
    transactionDate: "2022-09-06T11:05:00+00:00",
    customerId: 3,
    transactionType: "P2P_SEND",
    transactionStatus: "SETTLED",
    description: "Transfer to Adam",
    amount: -10000,
    metadata: {
      relatedTransactionId: 16,
      deviceId: "F210200"
    }
  },
  {
    transactionId: 16,
    authorizationCode: "F10007",
    transactionDate: "2022-09-06T11:05:00+00:00",
    customerId: 4,
    transactionType: "P2P_RECEIVE",
    transactionStatus: "SETTLED",
    description: "Transfer from Frederik",
    amount: 10000,
    metadata: {
      relatedTransactionId: 15
    }
  },
  {
    transactionId: 17,
    authorizationCode: "F10008",
    transactionDate: "2022-09-06T13:05:00+00:00",
    customerId: 4,
    transactionType: "P2P_SEND",
    transactionStatus: "SETTLED",
    description: "Transfer to Weoy",
    amount: -10000,
    metadata: {
      relatedTransactionId: 18,
      deviceId: "F210200"
    }
  },
  {
    transactionId: 18,
    authorizationCode: "F10008",
    transactionDate: "2022-09-06T13:05:00+00:00",
    customerId: 5,
    transactionType: "P2P_RECEIVE",
    transactionStatus: "SETTLED",
    description: "Transfer from Adam",
    amount: 10000,
    metadata: {
      relatedTransactionId: 17
    }
  },
  {
    transactionId: 19,
    authorizationCode: "F10009",
    transactionDate: "2022-09-07T05:31:32+00:00",
    customerId: 6,
    transactionType: "ACH_INCOMING",
    transactionStatus: "PENDING",
    description: "Cash load from Venmo",
    amount: 3000,
    metadata: {}
  },
  {
    transactionId: 20,
    authorizationCode: "F10009",
    transactionDate: "2022-09-08T06:45:22+00:00",
    customerId: 6,
    transactionType: "ACH_INCOMING",
    transactionStatus: "SETTLED",
    description: "Cash load from Venmo",
    amount: 3000,
    metadata: {
      relatedTransactionId: 19
    }
  },
  {
    transactionId: 21,
    authorizationCode: "F10010",
    transactionDate: "2022-09-09T11:05:00+00:00",
    customerId: 6,
    transactionType: "P2P_SEND",
    transactionStatus: "SETTLED",
    description: "Transfer to Joseph",
    amount: -3000,
    metadata: {
      relatedTransactionId: 22,
      deviceId: "F210200"
    }
  },
  {
    transactionId: 22,
    authorizationCode: "F10010",
    transactionDate: "2022-09-09T11:05:00+00:00",
    customerId: 7,
    transactionType: "P2P_RECEIVE",
    transactionStatus: "SETTLED",
    description: "Transfer from Luis",
    amount: 3000,
    metadata: {
      relatedTransactionId: 21
    }
  },
  {
    transactionId: 23,
    authorizationCode: "F10011",
    transactionDate: "2022-09-10T13:05:00+00:00",
    customerId: 7,
    transactionType: "P2P_SEND",
    transactionStatus: "SETTLED",
    description: "Transfer to Weoy",
    amount: -3000,
    metadata: {
      relatedTransactionId: 24,
      deviceId: "F210200"
    }
  },
  {
    transactionId: 24,
    authorizationCode: "F10011",
    transactionDate: "2022-09-10T13:05:00+00:00",
    customerId: 5,
    transactionType: "P2P_RECEIVE",
    transactionStatus: "SETTLED",
    description: "Transfer from Joseph",
    amount: 3000,
    metadata: {
      relatedTransactionId: 23
    }
  },
  {
    transactionId: 25,
    authorizationCode: "F10012",
    transactionDate: "2022-09-11T06:30:00+00:00",
    customerId: 5,
    transactionType: "WIRE_OUTGOING",
    transactionStatus: "SETTLED",
    description: "Transfer to Citibank",
    amount: 12995,
    metadata: {
      deviceId: "F210200"
    }
  },
  {
    transactionId: 26,
    authorizationCode: "F20012",
    transactionDate: "2022-09-11T06:30:00+00:00",
    customerId: 5,
    transactionType: "FEE",
    transactionStatus: "SETTLED",
    description: "Fee for Outgoing Wire",
    amount: 5,
    metadata: {
      relatedTransactionId: 25
    }
  },
  {
    transactionId: 27,
    authorizationCode: "F10013",
    transactionDate: "2022-10-01T11:46:42+00:00",
    customerId: 8,
    transactionType: "ACH_INCOMING",
    transactionStatus: "PENDING",
    description: "Deposit from Citibank",
    amount: 500,
    metadata: {}
  },
  {
    transactionId: 28,
    authorizationCode: "F10013",
    transactionDate: "2022-10-03T15:41:42+00:00",
    customerId: 8,
    transactionType: "ACH_INCOMING",
    transactionStatus: "SETTLED",
    description: "Deposit from Citibank",
    amount: 500,
    metadata: {
      relatedTransactionId: 27
    }
  },
  {
    transactionId: 29,
    authorizationCode: "F10014",
    transactionDate: "2022-10-05T11:36:42+00:00",
    customerId: 8,
    transactionType: "POS",
    transactionStatus: "PENDING",
    description: "Amazon",
    amount: -99.99,
    metadata: {}
  },
  {
    transactionId: 30,
    authorizationCode: "F10014",
    transactionDate: "2022-10-06T15:41:42+00:00",
    customerId: 8,
    transactionType: "POS",
    transactionStatus: "SETTLED",
    description: "Amazon",
    amount: -99.99,
    metadata: {
      relatedTransactionId: 29
    }
  },
  {
    transactionId: 31,
    authorizationCode: "F10015",
    transactionDate: "2022-10-01T11:46:42+00:00",
    customerId: 9,
    transactionType: "ACH_INCOMING",
    transactionStatus: "PENDING",
    description: "Deposit from Chase",
    amount: 300,
    metadata: {}
  },
  {
    transactionId: 32,
    authorizationCode: "F10015",
    transactionDate: "2022-10-03T15:41:42+00:00",
    customerId: 9,
    transactionType: "ACH_INCOMING",
    transactionStatus: "SETTLED",
    description: "Deposit from Chase",
    amount: 300,
    metadata: {
      relatedTransactionId: 31
    }
  },
  {
    transactionId: 33,
    authorizationCode: "F10016",
    transactionDate: "2022-11-10T13:05:00+00:00",
    customerId: 9,
    transactionType: "P2P_SEND",
    transactionStatus: "SETTLED",
    description: "Transfer to Bob",
    amount: -30,
    metadata: {
      relatedTransactionId: 34,
      deviceId: "A342011"
    }
  },
  {
    transactionId: 34,
    authorizationCode: "F10016",
    transactionDate: "2022-11-10T13:05:00+00:00",
    customerId: 8,
    transactionType: "P2P_RECEIVE",
    transactionStatus: "SETTLED",
    description: "Transfer from Alice",
    amount: 30,
    metadata: {
      relatedTransactionId: 33
    }
  }
];
