import { Router } from "express";
import { getCustomerTransactions, getRelatedCustomers } from "../../service";
import { isSEENCustomer } from "../../clients/seen";
const router = Router();

router.use("/:customerId", async (req, res, next) => {
  const customerId = req.params.customerId;
  const isValidCustomer = await isSEENCustomer(customerId);
  if (isValidCustomer) {
    next();
  } else {
    res.status(404).json({ error: true, code: "not_found" });
  }
});

router.get("/:customerId/transactions", async (req, res) => {
  const customerId = req.params.customerId;
  const customerTransactions = await getCustomerTransactions(parseInt(customerId));
  res.json(customerTransactions);
});

// api name ?
router.get("/:customerId/related", async (req, res) => {
  const customerId = req.params.customerId;
  const relatedCustomers = await getRelatedCustomers(parseInt(customerId));
  res.json(relatedCustomers);
});

export default router;
