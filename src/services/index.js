
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

