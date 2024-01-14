import { ProductControllers } from "@/controllers";
import { Router } from "express";

const router = Router();
const Product = new ProductControllers();

router.post("/create", Product.create);
router.put("/wishlist", Product.addToWishlist);
router.delete("/wishlist/:id", Product.removeFromWishlist);
router.put("/cart", Product.addToCart);
router.delete("/cart/:id", Product.removeFromCart);
router.get("/all", Product.getAllProducts);
router.get("/category/:type", Product.getByCategory);
router.get("/ids", Product.getByIds);
router.get("/:id", Product.getById);

export default router;
