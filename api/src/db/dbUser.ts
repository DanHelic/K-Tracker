/*import pool from './dbMain.js';

export async function getUser(userName){
  const ret = await pool.query('select * from users where username = $1', 
    [userName]);
  return ret;
}*/

import argon2 from "argon2";
import prisma from "./dbMain.js";
import {userT} from ".././types/userT.js";


export async function getAllUsers () {
  try{
    const usersDb = await prisma.user.findMany({
      select: {
        user_id: true,
        user_name: true,
        created_at: true,
        last_login: true,
        is_admin: true
      }
    });

    const users: userT[] = [];
    usersDb.forEach((user) => users.push(userT.fromDb(user)));
    return { success: true, users };
  }
  catch (e) {
    console.error(e);
    return { success: false, code: 500, message: "error while trying to get all users. "+ e};
  }
}


export async function getUserById(userId_: number) {
  try{
    const userDb = await prisma.user.findFirst({
      select: {
        user_id: true,
        user_name: true,
        created_at: true,
        last_login: true,
        is_admin: true
      },
      where: {
        user_id: userId_
      }
    });

    const user = userT.fromDb(userDb);
    return {success: true, user};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get user. "+ e};
  }
}


export async function createUser(user_name_: string, password_: string, email_: string, first_name_: string, last_name_: string) {
  try{
    const newUser = await prisma.user.create({
      data: {
        user_name: user_name_,
        email: email_,
        password: await argon2.hash(password_),
        first_name: first_name_,
        last_name: last_name_,
      },
    });

    const user = userT.fromDb(newUser);
    return {success: true, user};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new user "+ e};
  }
}


export async function checkPassword(user_name_: string, password_: string){
  try{
    const user = await prisma.user.findFirst({
      select: {
        password: true, 
        user_id: true
      },
      where: {
        user_name: user_name_
      }
    });

    if(user==null){
      return {success: false, code: 401, message: "Password or username incorrect"};
    }

    if(await argon2.verify(user.password, password_)){
      return {success: true, id: user.user_id, message: "Login successful"};
    }
    else{
      return {success: false, code: 401, message: "Password or username incorrect"};
    }
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to login user. "+ e};
  }
}


export async function changeUsername(old_user_name_: string, new_user_name_: string){
  try{
    const user = await prisma.user.update({
      where: {
        user_name: old_user_name_
      },
      data: {
        user_name: new_user_name_
      }
    })
    return {success: true, message: "Usernamechange successful"};
  }
  catch(e){
    return {success: false, code: 500, message: "error while changing username. "+ e};
  }
}


export async function changePassword(user_name_: string, old_password_: string, new_password_: string){
  try{
    const user = await prisma.user.update({
      where: {
        user_name: user_name_
      },
      data: {
        password: await argon2.hash(new_password_)
      }
    })
    return {success: true, message: "Password change successful"};
  }
  catch(e){
    return {success: false, code: 500, message: "error while chaning password. "+ e};
  }
}


export async function changeEmail(user_id_: number, old_email_: string, new_email_: string){
  try{
    const user = await prisma.user.update({
      where: {
        user_id: user_id_,
        email: old_email_
      },
      data: {
        email: new_email_
      }
    })
    return {success: true, message: "Email change successful"};
  }
  catch(e){
    return {success: false, code: 500, message: "error while chaning email. "+ e};
  }
}


export async function changeName(user_id_: number, first_name_: string, last_name_: string){
  try{
    const user = await prisma.user.update({
      where: {
        user_id: user_id_,
      },
      data: {
        first_name: first_name_,
        last_name: last_name_
      }
    })
    return {success: true, message: "name change successful"};
  }
  catch(e){
    if((e as Error).message="An operation failed because it depends on one or more records that were required but not found. No record was found for an update."){
      return {success: false, code: 401, message: "Username not found. "+ e};
    }
    return {success: false, code: 500, message: "error while chaning name. "+ e};
  }
}



//help functions / extra functions without return to frontend
export async function userNameAvailable(user_name_: string): Promise<boolean>{
  try{
    const user = await prisma.user.findFirst({
      select: {user_id: true},
      where: {user_name: user_name_}
    });
    if(user == null){ return true;}
    return false;
  }
  catch (e) {
    console.error("error while checking username availability. "+ e);
    return false;
  }
}


export async function emailAvailable(email_: string): Promise<boolean>{
  try{
    const user = await prisma.user.findFirst({
      select: {user_id: true},
      where: {email: email_}
    });
    if(user == null){ return true;}
    return false;
  }
  catch (e) {
    console.error("error while checking email availability. "+ e);
    return false;
  }
}


export async function setLastLogin(user_name_: string, last_login_?: Date){
  if(last_login_==null)last_login_= new Date();
  try{
    const user = await prisma.user.update({
      where: {
        user_name: user_name_
      },
      data: {
        last_login: last_login_
      }
    })
    return {success: true, message: "last login updated"};
  }
  catch(e){
    return {success: false, code: 500, message: "error while updating last login. "+ e};
  }
}


export async function userIsAdmin(user_id_: number): Promise<boolean>{
  try{
    const user = await prisma.user.findFirst({
      select: {is_admin: true},
      where: {user_id: user_id_}
    });
    if(user == null){ return false;}
    return user.is_admin;
  }
  catch (e) {
    console.error("error while checking admin status of user: " + user_id_ + ". "+ e);
    return false;
  }
}