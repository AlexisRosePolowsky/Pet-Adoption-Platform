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
    if(type=== "dogs"){
        item=store.dogs[id]
        field = 
            <div className="about-container">
                <h2>{item.attributes.name}</h2>
                <div className="about-main">
                    <img src={`https://dogapi.dog/api/v2/breeds/${id + 1}.jpg`} className="card-img-top" alt=""/>
                    <p>Description: {item.attributes.description}</p>
                </div>
                <div className="about-footer">
                    <p>Life: {item.attributes.life.min}-{item.attributes.life.max}years</p>
                    <p>Male Weight: {item.attributes.male_weight.min}-{item.attributes.male_weight.max}lbs</p>
                    <p>Female Weight: {item.attributes.female_weight.min}-{item.attributes.female_weight.max}lbs</p>
                    <p>Hypoallergenic: {item.attributes.hypoallergenic}</p>
                </div>
            </div>
    }
    console.log(item)
    return (
        <div>
            {field}
        </div>
    )
}
export default About