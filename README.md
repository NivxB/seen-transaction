# Seen Transaction API

API to fetch customer transactions and related customers based on their transactions.

## API Endpoints

### Fetch Customer Transactions

**GET** `/v2/customer/:customerId/transactions`

Retrieves a list of transactions associated with a specific customer.

#### Response

```ts
{
   transactions: [{
      createdAt: string;
      updatedAt: string;
      transactionId: number;
      authorizationCode: string;
      status: "PENDING" | "SETTLED" | "RETURNED";
      description: string;
      transactionType:
         "ACH_INCOMING" |
         "ACH_OUTGOING" |
         "FEE" |
         "P2P_RECEIVE" |
         "P2P_SEND" |
         "POS" |
         "WIRE_INCOMING" |
         "WIRE_OUTGOING";
      metadata?: {
         relatedTransactionId?: number;
         deviceId?: string;
      };
      timeline: {
         createdAt: string;
         status: string;
         amount: number;
      }
   }]
}
```

### Fetch Related Customers

**GET** `/v2/admin/customer/:customerId/related`

Retrieves a list of related customers based on transactions.

#### Response

```ts
{
   relatedCustomers: [{
      relatedCustomerId: number;
      relationType:
         "ACH_INCOMING" |
         "ACH_OUTGOING" |
         "FEE" |
         "P2P_RECEIVE" |
         "P2P_SEND" |
         "POS" |
         "WIRE_INCOMING" |
         "WIRE_OUTGOING";
   }]
}

```

## Requirements

- Node.js >= 22.0.0

## Installation

```sh
# Clone the repository
git clone https://github.com/NivxB/seen-transaction.git

# Navigate to the project directory
cd seen-transaction

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env
```

## Running the Application

```sh
npm start  # Runs the application
```

## Testing

```sh
npm run test           # Run all tests
npm run test:unit      # Run unit tests
npm run test:integration  # Run integration tests
```
