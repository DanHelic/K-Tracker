import prisma from "./dbMain.js";

export async function getItemByIdRaw(item_id_: number) {
  try{
    const itemDB = await prisma.item.findFirst({
      select: {
        item_id: true,
        name: true,
        item_type_id: true,
        country_id: true,
        value: true,
        unit: true,
        item_producer_id: true,
        created_at: true
      },
      where: {
        item_id: item_id_
      }
    });

    if(itemDB == null) return {success: false, code: 404, message: "item with provided id not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getItemById(item_id_: number) {
  try{
    const itemDB = await prisma.item.findFirst({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        item_id: item_id_
      }
    });

    if(itemDB == null) return {success: false, code: 404, message: "item with provided id not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getItemByNameExact(item_name_: string) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        name: {equals: item_name_, mode: "insensitive"}
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function searchItemByName(item_name_: string) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        name: {contains: item_name_, mode: "insensitive"}
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getItemByTypeId(item_type_id_: number) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        item_type_id: item_type_id_
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getItemByCountryId(country_id_: number) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        country_id: country_id_
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getItemByProducerId(producer_id_: number) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        item_producer_id: producer_id_
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function searchItem(search_: string) {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      },
      where: {
        OR: [
          {name: {contains: search_, mode: "insensitive"}},
          {item_type: {item_type_name: {contains: search_, mode: "insensitive"} }},
          {item_producer: {item_producer_name: {contains: search_, mode: "insensitive"} }}
        ]
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function getAllItems() {
  try{
    const itemDB = await prisma.item.findMany({
      select: {
        item_id: true,
        name: true,
        item_type: true,
        country: true,
        value: true,
        unit: true,
        item_producer: true,
        created_at: true
      }
    });

    return {success: true, items: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get item. "+ e};
  }
}


export async function createItem(name_: string, item_type_id_: number, country_id_: number, value_: number, unit_: string, item_producer_id_: number) {
  try{
    const newItem = await prisma.item.create({
      data: {
        name: name_,
        item_type_id: item_type_id_,
        country_id: country_id_,
        value: value_,
        unit: unit_,
        item_producer_id: item_producer_id_,
      },
    });

    return {success: true, item: newItem};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new item "+ e};
  }
}


export async function updateItem(item_id_: number, name_: string, item_type_id_: number, country_id_: number, value_: number, unit_: string, item_producer_id_: number) {
  try{
    const newItem = await prisma.item.update({
      data: {
        name: name_,
        item_type_id: item_type_id_,
        country_id: country_id_,
        value: value_,
        unit: unit_,
        item_producer_id: item_producer_id_,
      },
      where: {
        item_id: item_id_
      }
    });

    return {success: true, item: newItem};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new item "+ e};
  }
}


export async function deleteItem(item_id_: number) {
  try{
    const item = await prisma.item.delete({
      where: {
        item_id: item_id_
      }
    });
    return {success: true, item: item}
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to delete item "+ e};
  }
}


//help functions / without return to frontend
export async function itemTypeIdExists(item_type_id_: number): Promise<boolean>{
  try{
    const itemType = await prisma.item_type.findFirst({
      select: {item_type_id: true},
      where: {item_type_id: item_type_id_}
    });
    if(itemType == null){ return false;}
    return true;
  }
  catch (e) {
    console.error("error while checking item type availability. "+ e);
    return false;
  }
}


export async function countryIdExists(country_id_: number): Promise<boolean>{
  try{
    const country = await prisma.country.findFirst({
      select: {country_id: true},
      where: {country_id: country_id_}
    });
    if(country == null){ return false;}
    return true;
  }
  catch (e) {
    console.error("error while checking country availability. "+ e);
    return false;
  }
}


export async function itemProducerIdExists(item_producer_id_: number): Promise<boolean>{
  try{
    const itemProducer = await prisma.item_producer.findFirst({
      select: {item_producer_id: true},
      where: {item_producer_id: item_producer_id_}
    });
    if(itemProducer == null){ return false;}
    return true;
  }
  catch (e) {
    console.error("error while checking item producer availability. "+ e);
    return false;
  }
}