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
                <div className={`${style.Item}`}>
                    <p>{data.name}</p>
                    <p>{data.type}</p>
                    <p>{data.price}</p>
                    <img src={data.url} style={{width:"150px",height:"150px"}}></img>

                    <button onClick={()=>handleClick(data.id)}>Add to Cart</button>
                </div>
                
            </>
        )
    }
}

export default Item;