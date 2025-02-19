import { Router } from "express";
import customerRouter from "./customer";
import { adminCustomerRouter } from "./admin";

const routes = [
  {
    path: "/customer",
    route: customerRouter
  },
  {
    path: "/admin/customer",
    route: adminCustomerRouter
  }
];

const router = Router();

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
