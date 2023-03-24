import React from "react";



export const getData = async(tipo, id="") => {
    try{
     const URL = `https://www.swapi.tech/api/${tipo}/${id}`;
        const response = await fetch(URL, { method: "GET" });
        const data = await response.json();
        //console.log("datos actuales",data);
        return data
    }catch(err){
            console.log('err')
        }
}

export const getCharacterData = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  }