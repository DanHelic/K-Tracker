import ICountry from "./ICountry";
import IItemProducer from "./IItemProducer";
import IItemType from "./IItemType";

export default interface IItem {
  item_id: number;
  name: string;
  item_type: IItemType | null;
  country: ICountry;
  value: number;
  unit: string;
  item_producer: IItemProducer | null;
  created_at: Date;
}