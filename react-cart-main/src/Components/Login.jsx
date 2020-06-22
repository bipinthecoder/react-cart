import React, { Component } from "react";
import {Link,Redirect} from "react-router-dom";
import style from "./LoginStyles.module.css";
import {AppContext} from "./AppProvider";


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = ()=>{
        console.log("Submit button clicked");
        const {isUserValid} = this.context;
        const{username,password} = this.state;
        isUserValid({username,password});
        
        
    }

    render(){
        const {isAuth,isUserValid} = this.context;
        console.log("data in Login is",isAuth());
        const {username,password} = this.state;
        if(isAuth()){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            < >
                <div className={`${style.Login}`}>
                    <div>
                        <div>User Name</div>
                        <input name="username" onChange={this.handleChange} value={username} placeholder="username"/>
                    </div>
                    <div>
                        <div>Password</div>
                        <input onChange={this.handleChange} name="password" value={password} placeholder="password"/>
                    </div>
                    <button onClick={this.handleSubmit}>Login</button>
                </div>
            </>
        )
    }
}

Login.contextType=AppContext;

export default Login;