import ICountry from "../api/ICountry";
import IItemProducer from "../api/IItemProducer";

export default interface IItem {
  item_id: number;
  name: string;
  item_type_id: number | null;
  country: ICountry;
  value: number;
  unit: string;
  item_producer: IItemProducer;
  created_at: Date;
}