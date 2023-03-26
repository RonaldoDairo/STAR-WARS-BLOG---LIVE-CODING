import React,{ useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { getData } from "../../services/index.js";

    const initialState=  {
      name: "",
      birth_year: "",
      gender: "",
      height: "",          
      skin_color: "",
      hair_color: "",
  }
    export const Details = ()=>{
    
    const params = useParams();
    const [characterData, setCharacterData] = useState({properties :(initialState)});
    const [load, setLoad] = useState(false);
    
    const getCharacterData = async () => {
        try {
          setLoad(true)
          const response = await getData(params.type , params.id)
          setCharacterData(response.result)
          setLoad(false)
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        getCharacterData();
      }, []);
   
        return (

                          <div>          
                              {load ? <div class="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                    </div>
                          </div> : null}




              <div className="row g-0">
                                  <div className="col-md-4">
                                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-fluid rounded-start" alt="..."/>
                                  </div>
                                  <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{characterData.properties.name}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui placeat itaque repellendus, dolor perspiciatis ut expedita repudiandae aut rem, excepturi, enim at voluptatum quam pariatur illum nobis quis esse</p>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint deserunt error quae dignissimos nostrum eum fugit iure quibusdam quod, obcaecati, cupiditate et assumenda tenetur nisi impedit, blanditiis labore aut? Eveniet illo ratione voluptate nemo quam commodi quod a suscipit voluptatem.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                  </div>
            </div>  
            <div>
                                <br/>
                                        <div id="infopersonaje">
                                          <p>Name: <br/> {characterData.properties.name}</p>
                                          <p>Birth year: <br/> {characterData.properties.birth_year}</p>
                                          <p>Gender: <br/> {characterData.properties.gender}</p>
                                          <p>Height: <br/>  {characterData.properties.height}</p>
                                          <p>Skin color: <br/> {characterData.properties.skin_color}</p>
                                          <p>Hair color: <br/>  {characterData.properties.hair_color}</p>
                                        </div>
       
          </div>      
        </div>
        );
}
