import { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Login.css"

class Login extends Component{

    constructor(props)
    {
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin(){
        this.props.history.push({pathname:"/newbot",state:{username:"Mohan"}});
    }
    render(){
        return(
            <div>
                <div className="content_container">
                    <label className="text">Login</label>
                    <br/><br/>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <br/><br/>
                        <input type="password" placeholder="Password"></input>
                    </form>
                    <br/>
                    <span>Forgot Password?</span>
                    <br/><br/>
                    <button className="request_access">Request Access</button>
                    <button className="login" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);