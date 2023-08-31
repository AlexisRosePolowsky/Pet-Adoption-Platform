import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const DogCard=(props)=>{
    const{store,actions}=useContext(Context)
    let attributes = props.dogs.attributes
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={`https://dogapi.dog/api/v2/breeds${props.id + 1}.jpg`} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{attributes.name}</h5>
                <p className="card-text">Life: {attributes.life.min}-{attributes.life.max}years</p>
                <p className="card-text">Male Weight: {attributes.male_weight.min}-{attributes.male_weight.max}lbs</p>
                <p className="card-text">Female Weight: {attributes.female_weight.min}-{attributes.female_weight.max}lbs</p>
                <Link to={"/about/dogs/"+ props.id}>
                    <span className="btn btn-primary">Learn More!</span>
                </Link>
                <button className="btn btn-secondary" onClick={() => actions.addfavorites(attributes.name)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default DogCard