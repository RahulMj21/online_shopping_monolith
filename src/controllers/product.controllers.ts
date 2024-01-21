import { StatusCode } from "@/constants/app.constants";
import CustomerService from "@/services/customer.services";
import ProductService from "@/services/product.services";
import { IProduct, IRequest } from "@/types";
import BigPromise from "@/utils/bigPromise";
import { NextFunction, Request, Response } from "express";

const productService = new ProductService();
const customerService = new CustomerService();

class ProductController {
  create = BigPromise(
    async (req: IRequest, res: Response, _next: NextFunction) => {
      const { name, desc, type, unit, price, available, suplier, banner } =
        req.body;
      const { data } = await productService.createProduct({
        name,
        type,
        unit,
        price,
        banner,
        suplier,
        available,
        description: desc,
      });
      return res.status(StatusCode.CREATED).json(data);
    },
  );

  getByCategory = BigPromise(
    async (req: IRequest, res: Response, _next: NextFunction) => {
      const type = req.params.type;
      const { data } = await productService.getProductsByCategory(type);
      return res.status(StatusCode.CREATED).json(data);
    },
  );

  getById = BigPromise(
    async (req: IRequest, res: Response, _next: NextFunction) => {
      const id = req.params.id;
      const { data } = await productService.getProductDetails(id);
      return res.status(StatusCode.CREATED).json(data);
    },
  );

  getByIds = BigPromise(
    async (req: IRequest, res: Response, _next: NextFunction) => {
      const { ids } = await req.body;
      const { data } = await productService.getProductsByIds(ids);
      return res.status(StatusCode.CREATED).json(data);
    },
  );

  addToWishlist = BigPromise(
    async (req: IRequest, res: Response, _next: NextFunction) => {
      if (req.user) {
        const { _id } = req.user;
        const product: { data: IProduct } =
          await productService.getProductDetails(req.body._id);
        const wishlist = await customerService.addToWishlist(_id, product.data);
        return res.status(StatusCode.CREATED).json(wishlist);
      }
      return res.status(StatusCode.SERVER_ERROR).json({ status: "ERROR" });
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

export default ProductController;
