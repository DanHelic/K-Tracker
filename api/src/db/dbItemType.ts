import prisma from "./dbMain.js";


export async function getItemTypeById(item_type_id_: number) {
  try{
    const itemDB = await prisma.item_type.findFirst({
      select: {
        item_type_id: true,
        item_type_name: true
      },
      where: {
        item_type_id: item_type_id_
      }
    });

    if(itemDB == null) return {success: false, code: 404, message: "itemtype with provided id not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemtype. "+ e};
  }
}


export async function getItemTypeByName(item_type_name_: string) {
  try{
    const itemDB = await prisma.item_type.findFirst({
      select: {
        item_type_id: true,
        item_type_name: true
      },
      where: {
        item_type_name: {contains: item_type_name_, mode: "insensitive"}
      }
    });

    if(itemDB == null) return {success: false, code: 404, message: "itemtype with provided name not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemtype. "+ e};
  }
}


export async function getItemTypeByNameExact(item_type_name_: string) {
  try{
    const itemDB = await prisma.item_type.findFirst({
      select: {
        item_type_id: true,
        item_type_name: true
      },
      where: {
        item_type_name: item_type_name_
      }
    });

    if(itemDB == null) return {success: false, code: 404, message: "itemtype with provided name not found"};
    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemtype. "+ e};
  }
}


export async function getAllItemTypes() {
  try{
    const itemDB = await prisma.item_type.findFirst({
      select: {
        item_type_id: true,
        item_type_name: true
      }
    });

    return {success: true, item: itemDB};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get itemtypes. "+ e};
  }
}


export async function createItemType(item_type_name_: string) {
  try{
    const newItemType = await prisma.item_type.create({
      data: {
        item_type_name: item_type_name_
      },
    });

    return {success: true, itemtype: newItemType};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new itemtype "+ e};
  }
}


export async function changeItemType(item_type_id_: number, item_type_name_: string) {
  try{
    const newItemType = await prisma.item_type.update({
      data: {
        item_type_name: item_type_name_
      },
      where: {
        item_type_id: item_type_id_
      }
    });

    return {success: true, itemtype: newItemType};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to change an existing itemtype "+ e};
  }
}