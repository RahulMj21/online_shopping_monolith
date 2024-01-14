import { CustomerControllers } from "@/controllers";
import { Router } from "express";

const router = Router();
const Customer = new CustomerControllers();

router.post("/signup", Customer.signup);
router.post("/login", Customer.login);
router.post("/address", Customer.address);
router.get("/profile", Customer.profile);
router.get("/shopping-details", Customer.shoppingDetails);
router.get("/wishlist", Customer.wishlist);

export default router;
