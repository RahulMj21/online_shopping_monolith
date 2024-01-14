import { StatusCode } from "@/constants/app.constants";
import BigPromise from "@/utils/bigPromise";
import { NextFunction, Request, Response } from "express";

class CustomerController {
  signup = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res
        .status(StatusCode.CREATED)
        .json({ status: "OK", message: "signup successful" });
    },
  );

  login = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res
        .status(StatusCode.OK)
        .json({ status: "OK", message: "login successful" });
    },
  );

  address = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.OK).json({ status: "OK" });
    },
  );

  profile = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.OK).json({ status: "OK" });
    },
  );

  shoppingDetails = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.OK).json({ status: "OK" });
    },
  );

  wishlist = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.OK).json({ status: "OK" });
    },
  );
}

export default CustomerController;
