import prisma from "./dbMain.js";

export async function getPurchaseItemById(purchase_item_id_: number, user_id_: number) {
  try{
    const purchaseItemDb = await prisma.purchase_item.findFirst({
      select: {
        purchase_item_id: true,
        purchase: true,
        item: true,
        item_total_price: true,
        amount: true,
        item_name: true
      },
      where: {
        purchase_item_id: purchase_item_id_
      }
    });

    if(purchaseItemDb == null) return {success: false, code: 404, message: "purchaseItem not found"};
    if(purchaseItemDb.purchase != null && purchaseItemDb.purchase.user_id != user_id_) return {success: false, code: 403, message: "purchaseItem belongs to different user"};
    return {success: true, purchaseItem: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function getPurchaseItemByIdRaw(purchase_item_id_: number, user_id_: number) {
  try{
    const purchaseItemDb = await prisma.purchase_item.findFirst({
      select: {
        purchase_item_id: true,
        purchase_id: true,
        item_id: true,
        item_total_price: true,
        amount: true,
        item_name: true,
        purchase: {
          select: {
            user_id: true
          }
        }
      },
      where: {
        purchase_item_id: purchase_item_id_
      }
    });

    if(purchaseItemDb == null) return {success: false, code: 404, message: "purchaseItem not found"};
    if(purchaseItemDb.purchase != null && purchaseItemDb.purchase.user_id != user_id_) return {success: false, code: 403, message: "purchaseItem belongs to different user"};
    return {success: true, purchaseItem: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function getPurchaseItemsOfUser(user_id_: number) {
  try{
    const purchaseItemDb = await prisma.purchase_item.findMany({
      select: {
        purchase_item_id: true,
        purchase: true,
        item: true,
        item_total_price: true,
        amount: true,
        item_name: true,
      },
      where: {
        purchase: {
          user_id: user_id_
        }
      }
    });

    if(purchaseItemDb[0] == null) return {success: false, code: 404, message: "purchaseItems of user not found"};
    return {success: true, purchaseItems: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function getPurchaseItemsOfUserPaginated(user_id_: number, offset_: number, limit_: number, orderBy_: string, order_: string) {
  //raw query needed because coalesce is unavailable in prisma
  //second regular query needed because raw query doesnt support argument for order unless its unsafe
  try{
    let purchaseItemDb;
    if(orderBy_ == "item_name"){
      if(order_ == "asc"){
        purchaseItemDb = await prisma.$queryRaw`
          SELECT 
            pi.purchase_item_id,
            row_to_json(p) AS purchase,
            row_to_json(i) AS item,
            pi.item_total_price,
            pi.amount,
            COALESCE(pi.item_name, i.name) as item_name
          FROM
            "purchase_item" pi
          LEFT JOIN "item" i ON pi.item_id = i.item_id
          LEFT JOIN "purchase" p ON pi.purchase_id = p.purchase_id
          WHERE p.user_id = ${user_id_}
          ORDER BY item_name asc
          LIMIT ${limit_}
          OFFSET ${offset_}
        `;
      }
      else{
        purchaseItemDb = await prisma.$queryRaw`
          SELECT 
            pi.purchase_item_id,
            row_to_json(p) AS purchase,
            row_to_json(i) AS item,
            pi.item_total_price,
            pi.amount,
            COALESCE(pi.item_name, i.name) as item_name
          FROM
            "purchase_item" pi
          LEFT JOIN "item" i ON pi.item_id = i.item_id
          LEFT JOIN "purchase" p ON pi.purchase_id = p.purchase_id
          WHERE p.user_id = ${user_id_}
          ORDER BY item_name desc
          LIMIT ${limit_}
          OFFSET ${offset_}
        `;
      }
    }
    else{
      let table;
      switch (orderBy_){
        case "purchased_at":
        case "store_id":
        case "purchase_name": table = "purchase"; break;
        //case "item_total_price":
        //case "amount": table = "purchase_item"; break;
        //default: table = "purchase_item"
      }
      purchaseItemDb = await prisma.purchase_item.findMany({
        select: {
          purchase_item_id: true,
          purchase: true,
          item: true,
          item_total_price: true,
          amount: true,
          item_name: true
        },
        where: {
          purchase: {
            user_id: user_id_
          }
        },
        skip: offset_,
        take: limit_,
        orderBy: {
          ...(table
          ? {[table]: { [orderBy_]: order_ } }
          : {[orderBy_]: order_})
        }
      });
      for(let item of purchaseItemDb){
        item.item_name = item.item_name ?? item.item?.name ?? "itemNameNotFound";
      }
    }

    // @ts-ignore
    if(purchaseItemDb[0] == null) return {success: false, code: 404, message: "purchaseItems of user not found"};
    return {success: true, purchaseItems: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItems. "+ e};
  }
}


export async function searchPurchaseItemsOfUserDinstinct(user_id_: number, search_: string) {
  try{
    const purchaseItemDb = await prisma.$queryRaw`
    SELECT item_name, COUNT(*)::int as count, source
    FROM (
      SELECT pi.item_name,
      'custom item name' AS source
      FROM "purchase_item" pi
      LEFT JOIN "purchase" p ON pi.purchase_id = p.purchase_id
      WHERE p.user_id = ${user_id_} AND item_name ILIKE ${'%'+search_+'%'}

      UNION ALL

      SELECT i.name AS item_name,
      'item name' AS source
      FROM "purchase_item" pi
      LEFT JOIN "item" i ON pi.item_id = i.item_id
      LEFT JOIN "purchase" p ON pi.purchase_id = p.purchase_id
      WHERE p.user_id = ${user_id_} AND i.name ILIKE ${'%'+search_+'%'}
    ) t
    GROUP BY item_name, source
    ORDER BY item_name, count desc, source;
    `;
    console.log(purchaseItemDb);

    if(purchaseItemDb == null) return {success: false, code: 404, message: "purchaseItems of user not found"};
    return {success: true, purchaseItems: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function getItemsByNameExact(user_id_: number, name_: string){
  try{
    const purchaseItemDb = await prisma.purchase_item.findMany({
      select: {
        purchase_item_id: true,
        purchase: {
          select: {
            purchase_id: true,
            purchased_at: true
          }
        },
        item_total_price: true,
        amount: true
      },
      where: {
        purchase: {
          user_id: user_id_
        },
        item_name: {equals: name_, mode: "insensitive"}
      }
    });
    if(purchaseItemDb[0] == null) return {success: false, code: 404, message: "purchaseItems of user not found"};
    return {success: true, purchaseItems: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function getPurchaseItemByItemId(user_id_: number, item_id_: number){
  try{
    const purchaseItemDb = await prisma.purchase_item.findMany({
      select: {
        purchase_item_id: true,
        purchase: {
          select: {
            purchase_id: true,
            purchased_at: true
          }
        },
        item_total_price: true,
        amount: true
      },
      where: {
        purchase: {
          user_id: user_id_
        },
        item_id: item_id_
      },
      orderBy: [
        {purchase: { purchased_at: "asc" } } 
      ]
    });
    if(purchaseItemDb[0] == null) return {success: false, code: 404, message: "purchaseItems of user not found"};
    return {success: true, purchaseItems: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get purchaseItem. "+ e};
  }
}


export async function createPurchaseItem(purchase_id_: number, item_id_: number, item_total_price_: number, amount_: number, item_name_: string){
    try{
    const purchaseItemDb = await prisma.purchase_item.create({
      data: {
        purchase_id: purchase_id_,
        item_id: item_id_,
        item_total_price: item_total_price_,
        amount: amount_,
        item_name: item_name_
      },
    });

    return {success: true, purchaseItem: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new purchaseItem "+ e};
  }
}


export async function updatePurchaseItem(user_id_: number, purchase_item_id_: number, purchase_id_: number, item_id_: number, item_total_price_: number, amount_: number, item_name_: string){
    try{
    const purchaseItemDb = await prisma.purchase_item.update({
      data: {
        purchase_id: purchase_id_,
        item_id: item_id_,
        item_total_price: item_total_price_,
        amount: amount_,
        item_name: item_name_
      },
      where: {
        purchase_item_id: purchase_item_id_,
        purchase: {
          user_id: user_id_
        }
      }
    });

    return {success: true, purchaseItem: purchaseItemDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "purchaseItem belongs to different user or error while trying to update a purchaseItem "+ e};
  }
}


export async function  deletePurchaseItem(user_id_: number, purchase_item_id_: number) {
  try{
    const purchaseItemDb = await prisma.purchase_item.delete({
      where: {
        purchase_item_id: purchase_item_id_,
        purchase: {
          user_id: user_id_
        }
        }
      })
    return { success: !!purchaseItemDb};
  }
  catch(e) {
    return {success: false, code: 500, message: "error while trying to delete purchaseItems. "+ e};
  }
}


//help functions / extra functions without return to frontend
export async function  deletePurchaseItemsOfPurchase(purchase_id_: number) {
  try{
    const purchaseItemDb = await prisma.purchase_item.deleteMany({
      where: {
        purchase_id: purchase_id_
        }
      })
    return { deleted: purchaseItemDb.count };
  }
  catch(e) {
    return {success: false, code: 500, message: "error while trying to delete purchaseItems. "+ e};
  }
    
}