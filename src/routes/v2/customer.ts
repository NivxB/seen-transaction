import { Router } from "express";
import { getCustomerTransactions, getRelatedCustomers } from "../../services";
import { isSEENCustomer } from "../../clients/seen";
const router = Router();

router.use("/:customerId", async (req, res, next) => {
  const customerId = req.params.customerId;
  const isValidCustomer = await isSEENCustomer(customerId);
  if (isValidCustomer) {
    next();
  } else {
    res.status(404).json({ code: "not_found" });
  }
});

router.get("/:customerId/transactions", async (req, res) => {
  const customerId = req.params.customerId;
  const customerTransactions = await getCustomerTransactions(parseInt(customerId));
  res.json(customerTransactions);
});

router.get("/:customerId/related", async (req, res) => {
  const customerId = req.params.customerId;
  const relatedCustomers = await getRelatedCustomers(parseInt(customerId));
  res.json(relatedCustomers);
});

export default router;
