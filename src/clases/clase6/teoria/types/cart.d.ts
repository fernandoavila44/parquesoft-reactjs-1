export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  total: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: IProduct }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' };

export type CartContextType = {
  state: ICartState;
  dispatch: React.Dispatch<CartAction>;
}
