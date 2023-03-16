import React from "react";

//const URL = "https://www.swapi.tech/api/people/1"

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

// const [state, setState] = useState([]);
// export const getData = (tipo, id = "") => {
//   const URL = `https://www.swapi.tech/api/${tipo}/${id}`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
