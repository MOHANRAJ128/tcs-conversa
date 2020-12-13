import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NewBot.css";

export class NewBot extends Component{
    render(){
        return(
            <div className="bot_description">
                <h2>Let's Create Your First Bot</h2>
                <p>
                    Bot description hfkshfweerwe
                    dsndjwhweufuncsnkjb cdsmbjbwff cbsfu    fuwi
                </p>
                <br/><br/><br/><br/><br/>
                <NavLink to="/botdescription">
                    <button>+ Create Bot</button>
                </NavLink>
            </div>
        )
    }
}