import { ProductControllers } from "@/controllers";
import { Router } from "express";

const router = Router();

router.post("/create", ProductControllers.create);
router.put("/wishlist", ProductControllers.addToWishlist);
router.delete("/wishlist/:id", ProductControllers.removeFromWishlist);
router.put("/cart", ProductControllers.addToCart);
router.delete("/cart/:id", ProductControllers.removeFromCart);
router.get("/all", ProductControllers.getAllProducts);
router.get("/category/:type", ProductControllers.getByCategory);
router.get("/ids", ProductControllers.getByIds);
router.get("/:id", ProductControllers.getById);

export default router;
