// export interface OrderItem {
//     productId?: number;
//     productName: string;
//     quantity: number;
//   }
  
//   export interface Order {
//     orderId?: number;
//     clientFirstName: string;
//     clientLastName: string;
//     clientEmail: string;
//     clientTelephone: string;
//     clientAddress: string;
//     orderItems: OrderItem[];
//     pickupMethod: string;
//     paymentMethod: string;
//     createdAt: string;
//     status: string;
//   }
  


export interface OrderItem {
  id: number;
  quantity: number;
  productId: number;
  productName: string;
  productPrice: number;
}


export interface Order {
  id: number;
  orderNumber: string;
  orderDate: Date;
  shippingAddress: string;
  status: string;
  paymentMethod: string;
  deliveryMethod: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  items: OrderItem[];
}