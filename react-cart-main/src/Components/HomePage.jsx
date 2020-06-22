import React, { Component } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import data from "./TV.json";
import Item from "./Item";

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div>
                    {data?.map(item=>
                        <Item key={item.id} data={item}/>
                    )}
                </div>
            </>
        )
    }
}

export default HomePage;