import { StatusCode } from "@/constants/app.constants";
import { BigPromise } from "@/utils";
import { NextFunction, Request, Response } from "express";

class ProductController {
  create = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getByCategory = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getById = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getByIds = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  addToWishlist = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  removeFromWishlist = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  addToCart = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  removeFromCart = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );

  getAllProducts = BigPromise(
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(StatusCode.CREATED).json({ status: "OK" });
    },
  );
}

export default new ProductController();
