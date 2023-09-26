import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const DogCard=(props)=>{
    const{store,actions}=useContext(Context)
    let attributes = props.dog
    console.log(attributes);
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="border-bottom overflow-hidden d-flex align-items-start justify-content-center" style={{height: "15rem"}} >

                {attributes.image.length?<img  src={ attributes.image} className="card-img-top col-12"  alt=""/>:<img  src = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" className="col-12" alt="place holder image"/>}

            </div>

            <div className="card-body">
                <h5 className="card-title">{attributes.name}</h5>
                <p className="card-text">Life: {attributes.life.min}-{attributes.life.max}years</p>
                <p className="card-text">Male Weight: {attributes.maleWeight.min}-{attributes.maleWeight.max}lbs</p>
                <p className="card-text">Female Weight: {attributes.femaleWeight.min}-{attributes.femaleWeight.max}lbs</p>
                <Link to={`/about/${props.type}/`+ props.id}>
                    <span className="btn btn-primary">Learn More!</span>
                </Link>
                <button className="btn btn-secondary" onClick={() => actions.addtocart(attributes.name)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default DogCard