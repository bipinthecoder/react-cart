import React, { Component } from "react";
import {Link} from "react-router-dom"
import style from "./Item.module.css";

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {data, handleClick} = this.props;
        return(
            <>
                {/* <div className={`${style.Item}`}>
                    <p>{data.name}</p>
                    <p>{data.type}</p>
                    <p>{data.price}</p>
                    <img src={data.url} style={{width:"150px",height:"150px"}}></img>

                    <button onClick={()=>handleClick(data.id)}>Add to Cart</button>
                </div> */}


                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <img src={data.url} style={{width:"150px",height:"150px"}}></img>
                        <p className="card-text">Type: {data.type}</p>
                        <p className="card-text">Price: {data.price}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button className="btn btn-primary" onClick={()=>handleClick(data.id)}>Add to Cart</button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Item;