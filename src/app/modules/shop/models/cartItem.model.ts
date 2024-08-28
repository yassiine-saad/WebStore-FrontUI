// import { Product } from 'path/to/product.model';

import { Product } from "./product.model";

export interface CartItem {
  product: Product;
  quantity: number;
}
