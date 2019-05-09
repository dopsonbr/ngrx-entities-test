import { Item } from './mock-items';

export interface OrderLine {
  id: number,
  quantity: number,
  item?: Item
}
