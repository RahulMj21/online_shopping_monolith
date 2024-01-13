import { ShoppingControllers } from "@/controllers";
import { Router } from "express";

const router = Router();

router.post("/order", ShoppingControllers.placeOrder);
router.get("/orders", ShoppingControllers.getShoppingOrders);
router.get("/cart", ShoppingControllers.getShoppingCart);

export default router;
