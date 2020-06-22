import React, { Component } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Item.module.css";

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {data} = this.props;
        console.log("item is",data);
        return(
            <>
                <div className={`${style.Item}`}>
                    <p>{data.name}</p>
                    <p>{data.type}</p>
                    <p>{data.id}</p>
                    <img src={data.url} style={{width:"150px",height:"150px"}}></img>

                    <button>Add to Cart</button>
                </div>
                
            </>
        )
    }
}

export default Item;