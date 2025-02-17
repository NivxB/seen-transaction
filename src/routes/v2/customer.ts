import { Router } from "express";
import { getCustomerTransactions, getRelatedCustomers } from "../../service";
const router = Router();

router.get("/:customerId/transactions", (req, res) => {
  const customerId = req.params.customerId;
  const customerTransactions = getCustomerTransactions(customerId);
  res.json(customerTransactions);
});

// api name ?
router.get("/:customerId/related", (req, res) => {
  const customerId = req.params.customerId;
  const relatedCustomers = getRelatedCustomers(customerId);
  res.json(relatedCustomers);
});

export default router;
