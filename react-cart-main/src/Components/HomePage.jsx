import React, { Component } from "react";
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
import {AppContext} from "./AppProvider"

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            sortByPrice: "asc"
        }
    }

    handlePriceSortChange = (e)=>{
        // this.setState({
        //     sortByPrice: e.target.value
        // })
        this.props.history.push('/?orderby='+e.target.value)
    }

    handleUrlChange = (query)=>{
        
        const url = new URLSearchParams(query)

        console.log(url.get('orderby'))

        this.setState({
            sortByPrice: url.get('orderby')
        })
    }

    componentDidMount(){
     const {location} = this.props
       this.handleUrlChange(location.search)
    }

    componentWillReceiveProps(newProps){
        const { location } = newProps
        console.log(newProps)
        console.log(location.search !== this.props.location.search )
        if( location.search !== this.props.location.search ){
            this.handleUrlChange(location.search)
        }
    }
    render(){
        const { addToCart, getProducts } = this.context
        const {sortByPrice} = this.state
        console.log(this.context.getCart())
        const data = getProducts()
        return(
            <>
                <div className={`container-fluid`}>
                    <div className="row">
                        <div className={`col-2`}></div>
                        <div className={`col-8`}>

                        <div>
                            <select value={sortByPrice} onChange={this.handlePriceSortChange}>
                                <option value="asc">ascending</option>
                                <option value="desc">descending</option>
                            </select>
                        </div>
                            {data?.sort((a,b)=>{
                                if(sortByPrice==='asc'){
                                    return a.price-b.price
                                }
                                else{
                                    return b.price-a.price
                                }
                            }).map(item=>
                                <Item key={item.id} handleClick={addToCart} data={item}/>
                            )}


                        </div>
                        <div className={`col-2`}></div>
                    </div>
                   
                </div>
            </>
        )
    }
}

HomePage.contextType = AppContext

export default HomePage;