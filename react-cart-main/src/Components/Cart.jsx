import React, { Component } from "react";
import {Link} from "react-router-dom";
import {AppContext} from "./AppProvider";
import CartItem from "./CartItem";

class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const{getCart} = this.context;
        const cartArray = getCart();
        console.log(cartArray);
        return(
            <>
                {cartArray.map(item=>(
                    <CartItem key={item.id} data={item}/>
                ))}
            </>
        )
    }
}



Cart.contextType = AppContext;
export default Cart;