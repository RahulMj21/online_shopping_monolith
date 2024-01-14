import { ShoppingControllers } from "@/controllers";
import { Router } from "express";

const router = Router();
const Shopping = new ShoppingControllers();

router.post("/order", Shopping.placeOrder);
router.get("/orders", Shopping.getShoppingOrders);
router.get("/cart", Shopping.getShoppingCart);

export default router;
