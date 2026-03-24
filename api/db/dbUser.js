import pool from './dbMain.js';

export async function getUser(userName){
  const ret = await pool.query('select * from users where username = $1', 
    [userName]);
  return ret;
}