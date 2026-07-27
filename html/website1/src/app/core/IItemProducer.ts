import ICountry
 from "./ICountry";
export default interface IItemProducer {
  item_producer_id: number;
  item_producer_name: string;
  country_id: ICountry;
}