import { iAddress } from "./address";

export interface iProduct {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  condition: string;
  thumbnail: string;
  address: iAddress;
  accepts_mercadopago: boolean;
}
