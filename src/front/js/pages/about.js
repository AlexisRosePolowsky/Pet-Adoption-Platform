import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const About =() =>{
    const{store,actions}=useContext(Context)
    let params = useParams()
    let type = params.type
    let id = parseInt(params.id)
    let item
    let field 
   
        item = type == "dogs" ?  store.dogs[id] : type == "dogs2" ? store.dogs2[id] : type == "dogs3" ? store.dogs3[id] : undefined
        console.log("Item =======================", item)
        field =  item ? 
            <div className="about-container">
                <h2>{item.name}</h2>
                <div className="about-main">
                    <img src={item.image} className="card-img-top" alt=""/>
                    <p>Description: {item.des}</p>
                </div>
                <div className="about-footer">
                    <p>Life: {item.life.min}-{item.life.max}years</p>
                    <p>Male Weight: {item.maleWeight.min}-{item.maleWeight.max}lbs</p>
                    <p>Female Weight: {item.femaleWeight.min}-{item.femaleWeight.max}lbs</p>
                    <p>Hypoallergenic: {item.hypo}</p>
            
                </div>
            </div> : "Nothing to see here!"
  
    console.log(item)
    return (
        <div>
            {field}
        </div>
    )
}
export default About