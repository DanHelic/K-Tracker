import IPurchase from "./IPurchase";
import IItem from "./IItem";

export default interface IPurchaseItem {
  purchase_item_id: number,
  purchase: IPurchase;
  item: IItem | null;
  item_total_price: number;
  amount: number;
  price_per_amount: number;
  item_name: string | null;
}