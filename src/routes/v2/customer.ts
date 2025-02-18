import { Router } from "express";
import { getCustomerTransactions, getRelatedCustomers } from "../../service";
const router = Router();

router.get("/:customerId/transactions", async (req, res) => {
  const customerId = req.params.customerId;
  const customerTransactions = await getCustomerTransactions(parseInt(customerId));
  res.json(customerTransactions);
});

// api name ?
router.get("/:customerId/related", async (req, res) => {
  const customerId = req.params.customerId;
  const relatedCustomers = await getRelatedCustomers(customerId);
  res.json(relatedCustomers);
});

export default router;
