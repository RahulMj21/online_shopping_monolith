import { StatusCode } from "@/constants/app.constants";
import BigPromise from "@/utils/bigPromise";
import { NextFunction, Request, Response } from "express";

class ShoppingController {
  placeOrder = BigPromise(
    (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getShoppingOrders = BigPromise(
    (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getShoppingCart = BigPromise(
    (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );
}

export default new ShoppingController();
