import prisma from "./dbMain.js";


export async function getItemProducerById(item_producer_id_: number) {
  try{
    const itemDB = await prisma.item_producer.findFirst({
      select: {
        item_producer_id: true,
        item_producer_name: true,
        country: true
      },
      where: {
        item_producer_id: item_producer_id_
      }
    });

    if(itemDB == null) return {success: false, code: 400, message: "itemproducer with provided id not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemproducer. "+ e};
  }
}


export async function createItemProducer(item_producer_name_: string, country_id_: number) {
  try{
    const newItemProducer = await prisma.item_producer.create({
      data: {
        item_producer_name: item_producer_name_,
        country_id: country_id_
      },
    });

    return {success: true, itemtype: newItemProducer};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new itemproducer "+ e};
  }
}


export async function changeItemProducer(item_producer_id_: number, item_producer_name_: string, country_id_: number) {
  try{
    const newItemProducer = await prisma.item_producer.update({
      data: {
        item_producer_name: item_producer_name_,
        country_id: country_id_
      },
      where: {
        item_producer_id: item_producer_id_
      }
    });

    return {success: true, itemtype: newItemProducer};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to change an existing itemproducer "+ e};
  }
}