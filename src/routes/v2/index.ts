import { Router } from "express";
import customerRouter from "./customer";

const routes = [
  {
    path: "/customer",
    route: customerRouter
  }
];

const router = Router();

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
