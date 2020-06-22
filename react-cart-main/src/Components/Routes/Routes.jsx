import React from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from "../HomePage";
import Cart from "../Cart";
import Login from "../Login";
import Products from "../Products";
import NavBar from "../NavBar";
import tvData from "../TV.json";

const Router = ()=>{
    return(
        <>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/Cart" exact component={Cart}/>
            <Route path="/Login" exact component={Login}/>
            {/* <Route path="/Products" exact component={Products}/> */}
            <Route path="/Products/:id" exact render={(props)=><Products {...Products} data={tvData}/>} />


        </Switch>
        </>
    )
}


export default Router;