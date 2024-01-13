import { CustomerControllers } from "@/controllers";
import { Router } from "express";

const router = Router();

router.post("/signup", CustomerControllers.signup);
router.post("/login", CustomerControllers.login);
router.post("/address", CustomerControllers.address);
router.get("/profile", CustomerControllers.profile);
router.get("/shopping-details", CustomerControllers.shoppingDetails);
router.get("/wishlist", CustomerControllers.wishlist);

export default router;
