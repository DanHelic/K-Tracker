import prisma from "./dbMain.js";
import {userT} from ".././types/userT.js";
import { Prisma } from "./prisma/generated/client.js";


export async function getPurchaseById(purchase_id_: number, user_id_: number) {
  try{
    const purchaseDb = await prisma.purchase.findFirst({
      select: {
        purchase_id: true,
        user_id: true,
        purchased_at: true,
        store_id: true,
        total_price: true,
        item_count: true,
        purchase_name: true,
        purchaseItems: {
          select: {
            purchase_item_id: true,
            item_total_price: true,
            amount: true,
            item_name: true,
            item_id: true,
            item: {
              select: {
                name: true,
                item_type_id: true,
                country_id: true,
                value: true,
                unit: true,
                created_at: true,
                item_producer: true
              }
            }
          }
        }
      },
      where: {
        purchase_id: purchase_id_
      }
    });

    if(purchaseDb == null) return {success: false, code: 400, message: "purchase not found"};
    if(purchaseDb.user_id != user_id_) return {success: false, code: 403, message: "purchase belongs to different user"};
    return {success: true, purchase: purchaseDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchase. "+ e};
  }
}


export async function getPurchaseByIdNoItems(purchase_id_: number, user_id_: number) {
  try{
    const purchaseDb = await prisma.purchase.findFirst({
      select: {
        purchase_id: true,
        user_id: true,
        purchased_at: true,
        store_id: true,
        total_price: true,
        item_count: true,
        purchase_name: true
      },
      where: {
        purchase_id: purchase_id_
      }
    });

    if(purchaseDb == null) return {success: false, code: 400, message: "purchase not found"};
    if(purchaseDb.user_id != user_id_) return {success: false, code: 403, message: "purchase belongs to different user"};
    return {success: true, purchase: purchaseDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchase. "+ e};
  }
}


export async function getPurchasesOfUser(user_id_: number) {
  try{
    const purchaseDb = await prisma.purchase.findMany({
      select: {
        purchase_id: true,
        user_id: true,
        purchased_at: true,
        store_id: true,
        total_price: true,
        item_count: true,
        purchase_name: true
      },
      where: {
        user_id: user_id_
      }
    });

    return {success: true, purchases: purchaseDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchase. "+ e};
  }
}


export async function createPurchase(user_id_: number, purchased_at_: string, store_id_: number, total_price_: number, item_count_: number, purchase_name_: string){
    try{
    const newPurchase = await prisma.purchase.create({
      data: {
        user_id: user_id_,
        ...(purchased_at_ ? { purchased_at: new Date(purchased_at_) } : {}),
        store_id: store_id_,
        ...(total_price_ ? {total_price: total_price_} : {}),
        ...(item_count_ ? {item_count: item_count_} : {}),
        purchase_name: purchase_name_
      },
    });

    return {success: true, purchase: newPurchase};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new purchase "+ e};
  }
}








