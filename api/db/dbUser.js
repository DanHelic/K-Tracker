/*import pool from './dbMain.js';

export async function getUser(userName){
  const ret = await pool.query('select * from users where username = $1', 
    [userName]);
  return ret;
}*/

import argon2 from "argon2";
import prisma from './dbMain.js';

export async function getAllUsers () {
  try{
    const users = await prisma.user.findMany({
      select: {
        user_id: true,
        user_name: true,
        created_at: true,
        last_login: true,
        is_admin: true
      }
    });
    return { success: true, users };
  }
  catch (e) {
    return { success: false, code: "e.code", message: "Unknown error occured"};
  }
}

export async function getUserById(userId) {
  const user = await prisma.user.findFirst({
    select: {
      user_id: true,
      user_name: true,
      created_at: true,
      last_login: true,
      is_admin: true
    },
    where: {
      user_id: userId
    }
  })
  return user;
}

export async function createUser(user_name, password, email, first_name, last_name) {
  try{
    const newUser = await prisma.user.create({
      data: {
        user_name: user_name,
        email: email,
        password: await argon2.hash(password),
        first_name: first_name,
        last_name: last_name,
      },
    });
    console.log(newUser);
    return {success: true, newUser};
  }
  catch (e) {
    return {success: false, message: "error while trying to create a new user "+ e};
  }
  
  
}