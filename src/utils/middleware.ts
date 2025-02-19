import { RequestHandler } from "express";
import { isSEENCustomer } from "../clients/seen";

export const isValidSEENCustomer: RequestHandler<{ customerId: string }> = async (
  req,
  res,
  next
) => {
  const customerId = req.params.customerId;
  const isValidCustomer = await isSEENCustomer(customerId);
  if (isValidCustomer) {
    next();
  } else {
    res.status(404).json({ code: "not_found" });
  }
};
