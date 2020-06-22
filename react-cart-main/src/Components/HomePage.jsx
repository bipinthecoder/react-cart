import React, { Component } from "react";
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
import {AppContext} from "./AppProvider"

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { addToCart, getProducts } = this.context
        console.log(this.context.getCart())
        const data = getProducts()
        return(
            <>
                <div>
                    {data?.map(item=>
                        <Item key={item.id} handleClick={addToCart} data={item}/>
                    )}
                </div>
            </>
        )
    }
}

HomePage.contextType = AppContext

export default HomePage;