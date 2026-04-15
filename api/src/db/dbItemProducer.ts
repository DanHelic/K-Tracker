import prisma from "./dbMain.js";


export async function getItemProducerById(item_producer_id_: number) {
  try{
    const itemProducerDB = await prisma.item_producer.findFirst({
      select: {
        item_producer_id: true,
        item_producer_name: true,
        country: true
      },
      where: {
        item_producer_id: item_producer_id_
      }
    });

    if(itemProducerDB == null) return {success: false, code: 400, message: "itemproducer with provided id not found"};
    return {success: true, itemProducer: itemProducerDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemproducer. "+ e};
  }
}


export async function getItemProducerByName(item_producer_name_: string) {
  try{
    const itemProducersDB = await prisma.item_producer.findMany({
      select: {
        item_producer_id: true,
        item_producer_name: true,
        country: true
      },
      where: {
        item_producer_name: {contains: item_producer_name_, mode: "insensitive"}
      }
    });

    if(itemProducersDB[0] == null) return {success: false, code: 400, message: "itemproducer with provided name not found"};
    return {success: true, itemProducers: itemProducersDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemproducer. "+ e};
  }
}


export async function getItemProducerByNameExact(item_producer_name_: string) {
  try{
    const itemProducersDB = await prisma.item_producer.findFirst({
      select: {
        item_producer_id: true,
        item_producer_name: true,
        country: true
      },
      where: {
        item_producer_name: item_producer_name_
      }
    });

    if(itemProducersDB == null) return {success: false, code: 400, message: "itemproducer with provided name not found"};
    return {success: true, itemProducers: itemProducersDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemproducer. "+ e};
  }
}


export async function getAllItemProducer() {
  try{
    const itemProducersDB = await prisma.item_producer.findMany({
      select: {
        item_producer_id: true,
        item_producer_name: true,
        country: true
      }
    });

    if(itemProducersDB[0] == null) return {success: false, code: 400, message: "itemproducers not found"};
    return {success: true, itemProducers: itemProducersDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemproducers. "+ e};
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

    return {success: true, itemProducer: newItemProducer};
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