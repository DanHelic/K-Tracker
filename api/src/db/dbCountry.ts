import prisma from "./dbMain.js";

export async function getCountryById(country_id_: number) {
  try{
    const countryDb = await prisma.country.findFirst({
      select: {
        country_id: true,
        country_code: true,
        name: true
      },
      where: {
        country_id: country_id_
      }
    });

    if(countryDb == null) return {success: false, code: 400, message: "Country with provided id not found"};
    return {success: true, country: countryDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get country. "+ e};
  }
}


export async function getCountryByCode(country_code_: string) {
  try{
    const countryDb = await prisma.country.findFirst({
      select: {
        country_id: true,
        country_code: true,
        name: true
      },
      where: {
        country_code: country_code_
      }
    });

    if(countryDb == null) return {success: false, code: 400, message: "Country with provided code not found"};
    return {success: true, country: countryDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get country. "+ e};
  }
}


export async function getCountryByName(name_: string) {
  try{
    const countryDb = await prisma.country.findFirst({
      select: {
        country_id: true,
        country_code: true,
        name: true
      },
      where: {
        name: name_
      }
    });

    if(countryDb == null) return {success: false, code: 400, message: "Country with provided name not found"};
    return {success: true, country: countryDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get country. "+ e};
  }
}


export async function getAllCountries() {
  try{
    const countryDb = await prisma.country.findMany({
      select: {
        country_id: true,
        country_code: true,
        name: true
      },
      where: {
      }
    });

    if(countryDb == null) return {success: false, code: 400, message: "No Country found"};
    return {success: true, countries: countryDb};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to get countries. "+ e};
  }
}


export async function createCountry(country_code_: string, name_: string) {
  try{
    const newCountry = await prisma.country.create({
      data: {
        country_code: country_code_,
        name: name_
      },
    });

    return {success: true, country: newCountry};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to create a new country "+ e};
  }
}


export async function updateCountry(country_id_: number, country_code_: string, name_: string) {
  try{
    const newCountry = await prisma.country.update({
      where: {
        country_id: country_id_
      },
      data: {
        country_code: country_code_,
        name: name_
      },
    });

    return {success: true, country: newCountry};
  }
  catch (e) {
    return {success: false, code: 500, message: "error while trying to update country "+ e};
  }
}