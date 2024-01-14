export interface IAddress {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface IUser {
  email: string;
  password: string;
  phone: string;
  address: (IAddress | string)[];
  cart: ICartItem[];
  wishlist: (IProduct | string)[];
  orders: (IOrder | string)[];
}

export interface IProduct {
  name: string;
  description: string;
  banner: string;
  type: string;
  unit: number;
  price: number;
  available: boolean;
  suplier: string;
}

export interface IOrderItem {
  product: IProduct | string;
  unit: number;
}

export interface IOrder {
  orderId: string;
  customerId: string;
  amount: number;
  status: string;
  txnId: string;
  items: IOrderItem[];
}

export interface ICartItem {
  product: IProduct | string;
  unit: number;
}

export interface ICreateProductInput {
  name: string;
  type: string;
  unit: number;
  price: number;
  banner: string;
  suplier: string;
  available: boolean;
  description: string;
}

export interface ICreateOrderInput {
  customerId: string;
  txnId: string;
}
