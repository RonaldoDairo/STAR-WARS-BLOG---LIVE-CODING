import React,{ useContext,useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
 export const Details = ()=>{
    
    const { store, actions } = useContext(Context);
    
    const params = useParams()
    const [charactersData, setCharactersData] = useState([]);
    


	
    const getCharacterData = async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
          const data = await response.json();
          setCharactersData(prevData => [...prevData, data]);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        for (let i = 1; i <= 3; i++) {
          getCharacterData(i);
        }
      }, []);
   
        return (

        <div>

      
                
                                <div className="row g-0">
                <div className="col-md-4">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{params.todo}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui placeat itaque repellendus, dolor perspiciatis ut expedita repudiandae aut rem, excepturi, enim at voluptatum quam pariatur illum nobis quis esse</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint deserunt error quae dignissimos nostrum eum fugit iure quibusdam quod, obcaecati, cupiditate et assumenda tenetur nisi impedit, blanditiis labore aut? Eveniet illo ratione voluptate nemo quam commodi quod a suscipit voluptatem.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>  
            <div>
        {charactersData.map((character, index) => (
          <div key={index}>
            <p>Name: {character.result.properties.name}</p>
            <p>Height: {character.result.properties.height}</p>
            <p>Mass: {character.result.properties.mass}</p>
            <p>Hair color: {character.result.properties.hair_color}</p>
            <p>Skin color: {character.result.properties.skin_color}</p>
          </div>
        ))}
      </div>      
        </div>


        )


}
