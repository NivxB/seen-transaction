import { Router } from "express";
import { getCustomerTransactions } from "../../services";
import { isValidSEENCustomer } from "../../utils/middleware";
const router = Router();

router.use("/:customerId", isValidSEENCustomer);

router.get("/:customerId/transactions", async (req, res) => {
  const customerId = req.params.customerId;
  const customerTransactions = await getCustomerTransactions(parseInt(customerId));
  res.json(customerTransactions);
});

export default router;
