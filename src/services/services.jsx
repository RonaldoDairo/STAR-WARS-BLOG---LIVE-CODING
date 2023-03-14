import React from "react";

    const URL = "https://www.swapi.tech/api/";
export const getData = async() => {
    try{
        const response = await fetch(URL, { method: "GET" });
        const data = await response.json();
        console.log(data);
    }catch(err){
            console.log('err')
        }
}	
    