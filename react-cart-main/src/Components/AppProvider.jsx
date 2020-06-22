import React, { Component, createContext } from 'react'
import data from "./TV.json"
export const AppContext = createContext();


export default class AppProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            productsArr: data,
            cartArr: [],
            isAuthenticated: false,
            users: [ 
                {
                    username: 'admin',
                    password: 'admin'
                }
             ]
        }
    }

    isAuth = () => {
        return this.state.isAuthenticated
    }

    getProducts=()=>{
        return this.state.productsArr
    }

    getCart = ()=> {
        return this.state.cartArr
    }

    addToCart = (payload) => {
        // checks if user is auth

        if(!this.isAuth()){
            alert('please login to add')
            return
        }

        let item = this.state.productsArr.find( item=>item.id===payload )
        let cart = [...this.state.cartArr]
        // item already exists in cart
        let flag = false;
        for( let i=0; i<cart.length; i++){
            if( cart[i].id === payload ){
                cart[i].qty++;
                flag = true;
                break
            }
        }
        if(!flag){
            item.qty = 1
            this.setState({
                cartArr: [ ...this.state.cartArr, item]
            })
        }
        else{
            this.setState({
                cartArr: cart
            })
        }

    }

    isUserValid = ({ username, password }) => {
        let flag = false;
        this.state.users.forEach( item => 
            item.username===username && 
            item.password===password?
                flag = true:
                null
            )
        if(flag){
            alert('user is logged in')
            this.setState({
                isAuthenticated: true
            })
        }
        else{
            alert('wrong credentials')
        }
    }

    render() {
        let methods = {
            isAuth: this.isAuth,
            isUserValid: this.isUserValid,
            getProducts: this.getProducts,
            getCart: this.getCart,
            addToCart: this.addToCart,
        }
        return (
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
