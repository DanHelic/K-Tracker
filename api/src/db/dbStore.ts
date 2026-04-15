import prisma from "./dbMain.js";


export async function getStoreById(store_id_: number, user_id_: number) {
  try{
    const storeDb = await prisma.store.findFirst({
      select: {
        store_id: true,
        name: true,
        user_id: true,
        location: true
      },
      where: {
        store_id: store_id_
      }
    });

    if(storeDb == null) return {success: false, code: 400, message: "store not found"};
    if(storeDb.user_id != user_id_) return {success: false, code: 403, message: "store belongs to different user"};
    return {success: true, store: storeDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get store. "+ e};
  }
}


export async function searchStore(search_: string, user_id_: number) {
  try{
    const storeDb = await prisma.store.findMany({
      select: {
        store_id: true,
        name: true,
        user_id: true,
        location: true
      },
      where: {
        OR: [
            {name: {contains: search_, mode: "insensitive"}},
            {location: {contains: search_, mode: "insensitive"}},
        ],
        user_id: user_id_
      }
    });

    if(storeDb[0] == null) return {success: false, code: 400, message: "store not found"};
    return {success: true, stores: storeDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get store. "+ e};
  }
}


export async function searchStoreByName(name_: string, user_id_: number) {
  try{
    const storeDb = await prisma.store.findMany({
      select: {
        store_id: true,
        name: true,
        user_id: true,
        location: true
      },
      where: {
        name: {contains: name_, mode: "insensitive"},
        user_id: user_id_
      }
    });

    if(storeDb[0] == null) return {success: false, code: 400, message: "store not found"};
    return {success: true, stores: storeDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get store. "+ e};
  }
}


export async function getStoresOfUser(user_id_: number) {
  try{
    const storeDb = await prisma.store.findMany({
      select: {
        store_id: true,
        name: true,
        location: true
      },
      where: {
        user_id: user_id_
      }
    });

    if(storeDb[0] == null) return {success: false, code: 400, message: "stores not found"};
    return {success: true, stores: storeDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get store. "+ e};
  }
}



export async function createStore(name_: string, user_id_: number, location_: string) {
  try{
    const newStore = await prisma.store.create({
      data: {
        name: name_,
        user_id: user_id_,
        location: location_
      },
    });

    return {success: true, store: newStore};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new store "+ e};
  }
}



export async function changeName(store_id_: number, name_: string, user_id_: number) {
  try{
    const newStore = await prisma.store.update({
      data: {
        name: name_
      },
      where: {
        store_id: store_id_,
        user_id: user_id_
      }
    });

    return {success: true, store: newStore};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to change name. "+ e};
  }
}


export async function changeLocation(store_id_: number, location_: string, user_id_: number) {
  try{
    const newStore = await prisma.store.update({
      data: {
        location: location_
      },
      where: {
        store_id: store_id_,
        user_id: user_id_
      }
    });

    return {success: true, store: newStore};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to change name. "+ e};
  }
}