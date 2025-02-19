import { Router } from "express";
import { getRelatedCustomers } from "../../../services";
import { isValidSEENCustomer } from "../../../utils/middleware";
const router = Router();

// Is Admin User Middleware
router.use("/:customerId", isValidSEENCustomer);

router.get("/:customerId/related", async (req, res) => {
  const customerId = req.params.customerId;
  const relatedCustomers = await getRelatedCustomers(parseInt(customerId));
  res.json({ relatedCustomers });
});

export default router;
